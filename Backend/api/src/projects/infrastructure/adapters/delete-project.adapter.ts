// delete-project.adapter.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from '../../domain/entities/project.entity';
import { DeleteProjectPort } from '../../domain/ports/delete-project.port';
import axios from 'axios';

// delete-project.adapter.ts
@Injectable()
export class DeleteProjectAdapter implements DeleteProjectPort {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async deleteProject(id: string): Promise<void> {
    console.log('Deleting project with id:', id);

    const project = await this.projectRepository.findOne({ where: { id } });
    if (!project) {
      console.error('Project not found in local database with id:', id);
      throw new Error('Project not found');
    }

    console.log('Found project in local database:', project);

    const workspaceId = '663a196d5e8ef3683b21dec8';
    const clockifyApiKey = 'NTk4NDg5ZjItNzdlNC00ZDY5LTg5ZTQtM2YyYjgyZmIyYmE0';

    try {
      console.log('Deleting project in Clockify with id:', project.clockifyId);
      await axios.delete(`https://api.clockify.me/api/v1/workspaces/${workspaceId}/projects/${project.clockifyId}`, {
        headers: { 'X-Api-Key': clockifyApiKey }

      });
      

      console.log('Deleted project in Clockify, now deleting in local database');
      await this.projectRepository.delete(id);
      console.log('Deleted project in local database');
    } catch (error) {
      console.error('Error deleting project in Clockify:', error.response ? error.response.data : error.message);
      throw new Error('Failed to delete project in Clockify');
    }
  }
}