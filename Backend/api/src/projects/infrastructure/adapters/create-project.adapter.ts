import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from '../../domain/entities/project.entity';
import { CreateProjectPort } from '../../domain/ports/create-project.port';
import { User } from 'src/users/domain/entities/user.entity';
import { Status } from '../../application/dto/create-project.dto';
import axios from 'axios';
import { Client } from 'src/clients/domain/entities/client.entity';

@Injectable()
export class CreateProjectAdapter implements CreateProjectPort {
    constructor(
        @InjectRepository(Project)
        private readonly projectRepository: Repository<Project>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(Client)
        private readonly clientRepository: Repository<Client>,
    ) {}

    async createProject(project: Project, userIds: string[], clientId: string): Promise<Project> {
        const users = await this.userRepository.findByIds(userIds);
        const client = await this.clientRepository.findOneOrFail({ where: { id: clientId } });

        if (!client) {
            throw new NotFoundException(`Client with id ${clientId} not found`);
        }

        if (users.length !== userIds.length) {
            throw new NotFoundException(`Some users with ids ${userIds.join(', ')} not found`);
        }

        project.users = users;
        project.client = client;
        project.status = project.status ? project.status : Status.Pending;
        project.photoUrl = project.photoUrl ? project.photoUrl : "http://res.cloudinary.com/dqwqulk5l/image/upload/v1715173814/defaultProjectHome_ti0bid.jpg";

        const workspaceId = '663a196d5e8ef3683b21dec8';
        const clockifyApiKey = 'NTk4NDg5ZjItNzdlNC00ZDY5LTg5ZTQtM2YyYjgyZmIyYmE0';

        try {
            // Check if project already exists in Clockify
            const clockifyProjectsResponse = await axios.get(`https://api.clockify.me/api/v1/workspaces/${workspaceId}/projects`, {
                headers: { 'X-Api-Key': clockifyApiKey }
            });
            const projectExists = clockifyProjectsResponse.data.some(p => p.name === project.name);
            if (projectExists) {
                throw new Error('Project already exists in Clockify');
            }

            // Add Clockify project creation logic here
            const clockifyProject = {
                name: project.name,
                isPublic: true,
                billable: true,
                color: "#F44336",
            };

            console.log('Sending data to Clockify:', clockifyProject);

            // Call Clockify API to create project
            const clockifyResponse = await axios.post(`https://api.clockify.me/api/v1/workspaces/${workspaceId}/projects`, clockifyProject, {
                headers: { 'X-Api-Key': clockifyApiKey }
            });
            console.log('Clockify response:', clockifyResponse.data);

            // Assuming the Clockify response contains the ID of the created project
            const clockifyProjectId = clockifyResponse.data.id;

            // Save the Clockify ID in the project object
            project.clockifyId = clockifyProjectId;

            // Save the project in the database
            const savedProject = await this.projectRepository.save(project);

            return savedProject;
        } catch (error) {
            console.error('Error creating project in Clockify:', error.response ? error.response.data : error.message);
            if (error.message.includes('Project already exists in Clockify')) {
                throw new Error('Project already exists in Clockify');
            }
            throw new Error('Failed to create project in Clockify');
        }
    }
}