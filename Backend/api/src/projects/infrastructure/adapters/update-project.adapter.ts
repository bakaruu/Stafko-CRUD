import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateProjectDto } from '../../application/dto/update-project.dto';
import { Project } from '../../domain/entities/project.entity';
import { UpdateProjectPort } from '../../domain/ports/update-project.port';

@Injectable()
export class UpdateProjectAdapter implements UpdateProjectPort {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async updateProject(id: string, updateProjectDto: UpdateProjectDto): Promise<Project> {
    await this.projectRepository.update(id, updateProjectDto);
    return this.projectRepository.findOne({ where: { id } });
  }
}