// get-all-projects.adapter.ts
import { Injectable } from '@nestjs/common';
import { Project } from '../../domain/entities/project.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GetAllProjectsAdapter {
  constructor(
    @InjectRepository(Project)
    private projectsRepository: Repository<Project>,
  ) {}

  async getAllProjects(): Promise<Project[]> {
    return this.projectsRepository.find({ relations: ['client', 'users', 'tasks'] });
  }

}