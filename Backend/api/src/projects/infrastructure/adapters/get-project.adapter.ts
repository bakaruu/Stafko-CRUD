// get-project.adapter.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from '../../domain/entities/project.entity';
import { GetProjectPort } from '../../domain/ports/get-project.port';

@Injectable()
export class GetProjectAdapter implements GetProjectPort {
    constructor(
        @InjectRepository(Project)
        private readonly projectRepository: Repository<Project>,
    ) {}

    async getProject(id: string): Promise<Project> {
        return this.projectRepository.findOne({ where: { id }, relations: ['client', 'users', 'tasks'] });
    }

    async getProjects(): Promise<Project[]> {
        return this.projectRepository.find({ relations: ['client', 'users', 'tasks'] });
    }
}