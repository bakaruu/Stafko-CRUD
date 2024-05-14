import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from '../../../projects/domain/entities/project.entity';
import { Task } from '../../domain/entities/tasks.entity';
import { GetTasksToProjectPort } from 'src/tasks/domain/ports/get-tasks-to-project.port';
@Injectable()
export class GetTaskToProjectAdapter implements GetTasksToProjectPort {
    constructor(
        @InjectRepository(Project)
        private readonly projectRepository: Repository<Project>,
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>,
    ) {}
    getTasksToProject(projectId: string): Promise<Task[]> {
        throw new Error('Method not implemented.');
    }

    async getTasks(projectId: string): Promise<Task[]> {
        const project = await this.projectRepository.findOne({ 
            where: { id: projectId },
            relations: ['tasks'] 
        });
        if (!project) {
            throw new NotFoundException(`Project with id ${projectId} not found`);
        }
        return project.tasks;
    }
}