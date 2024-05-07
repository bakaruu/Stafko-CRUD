// project.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';
import { Project } from '../../domain/entities/project.entity';
import { Client } from '../../../clients/domain/entities/client.entity'; 
import { Repository } from 'typeorm';
import { CreateProjectAdapter } from 'src/projects/infrastructure/adapters/create-project.adapter';
import { DeleteProjectAdapter } from 'src/projects/infrastructure/adapters/delete-project.adapter';
import { GetProjectAdapter } from 'src/projects/infrastructure/adapters/get-project.adapter';
import { UpdateProjectAdapter } from 'src/projects/infrastructure/adapters/update-project.adapter';
import { GetAllProjectsAdapter } from '../../infrastructure/adapters/get-all-project.adapter'
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    private readonly createProjectAdapter: CreateProjectAdapter,
    private readonly updateProjectAdapter: UpdateProjectAdapter,
    private readonly getProjectAdapter: GetProjectAdapter,
    private readonly deleteProjectAdapter: DeleteProjectAdapter,
    private readonly getAllProjectsAdapter: GetAllProjectsAdapter,
  ) {}

  async createProject(dto: CreateProjectDto): Promise<Project> {
    const client = await this.clientRepository.findOne({ where: { id: dto.clientId } });
    if (!client) {
      throw new NotFoundException(`Client with id ${dto.clientId} not found`);
    }
  
    const project = new Project();
    project.name = dto.name;
    project.description = dto.description;
    project.photoUrl = dto.photoUrl;
    project.client = client;
  
    return this.createProjectAdapter.createProject(project);
  }

  updateProject(id: string, dto: UpdateProjectDto): Promise<Project> {
    return this.updateProjectAdapter.updateProject(id, dto);
  }

  getProject(id: string): Promise<Project> {
    return this.getProjectAdapter.getProject(id);
  }

  getProjects(): Promise<Project[]> {
    return this.getProjectAdapter.getProjects();
  }

  async getAllProjects(): Promise<Project[]> {
    return this.getAllProjectsAdapter.getAllProjects();
  }

  deleteProject(id: string): Promise<void> {
    return this.deleteProjectAdapter.deleteProject(id);
  }
}