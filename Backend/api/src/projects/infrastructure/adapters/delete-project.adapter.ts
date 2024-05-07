// delete-project.adapter.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from '../../domain/entities/project.entity';
import { DeleteProjectPort } from '../../domain/ports/delete-project.port';

@Injectable()
export class DeleteProjectAdapter implements DeleteProjectPort {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async deleteProject(id: string): Promise<void> {
    await this.projectRepository.delete(id);
  }
}