// project.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';
import { Project } from '../../domain/entities/project.entity';
import { Client } from '../../../clients/domain/entities/client.entity';
import { Repository } from 'typeorm';
import { CreateProjectAdapter } from '../../infrastructure/adapters/create-project.adapter';
import { DeleteProjectAdapter } from '../../infrastructure/adapters//delete-project.adapter';
import { GetProjectAdapter } from '../../infrastructure/adapters//get-project.adapter';
import { UpdateProjectAdapter } from '../../infrastructure/adapters/update-project.adapter';
import { GetAllProjectsAdapter } from '../../infrastructure/adapters//get-all-project.adapter'
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/domain/entities/user.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Project) // Inyecta el repositorio de Project
    private readonly projectRepository: Repository<Project>, // Añade esta línea
    
    private readonly createProjectAdapter: CreateProjectAdapter,
    private readonly updateProjectAdapter: UpdateProjectAdapter,
    private readonly getProjectAdapter: GetProjectAdapter,
    private readonly deleteProjectAdapter: DeleteProjectAdapter,
    private readonly getAllProjectsAdapter: GetAllProjectsAdapter,
  ) { }

  
  // projects.service.ts
async createProject(dto: CreateProjectDto, userIds: string[]): Promise<Project> {
  let client: Client = null;
  if (dto.clientId) {
    client = await this.clientRepository.findOne({ where: { id: dto.clientId } });
    if (!client) {
      throw new NotFoundException(`Client with id ${dto.clientId} not found`);
    }
  }

  const project = new Project();
  project.name = dto.name;
  project.description = dto.description;
  project.photoUrl = dto.photoUrl;
  project.client = client;

  project.status = dto.status;
  project.progress = dto.progress;
  project.deadline = dto.deadline;

  return this.createProjectAdapter.createProject(project, userIds);
}

async removeUserFromProject(projectId: string, userId: string): Promise<void> {
  // Usa el repositorio inyectado en lugar de getManager
  const project = await this.projectRepository.findOne({ where: { id: projectId }, relations: ['users'] });
  if (!project) {
    throw new NotFoundException(`Project with id ${projectId} not found`);
  }

  // Remove the user from the project's list of users
  project.users = project.users.filter(user => user.id !== userId);

  // Save the updated project
  await this.projectRepository.save(project); // Usa el repositorio inyectado aquí también

  // Find the user
  const user = await this.userRepository.findOne({ where: { id: userId }, relations: ['projects'] });
  if (user) {
    // Remove the project from the user's list of projects
    user.projects = user.projects.filter(project => project.id !== projectId);
    await this.userRepository.save(user);
  }
}

// 




  async updateProject(id: string, dto: UpdateProjectDto): Promise<Project> {
    return this.updateProjectAdapter.updateProject(id, dto);
  }

  async updatePartialProject(id: string, dto: UpdateProjectDto): Promise<Project> {
    return this.updateProjectAdapter.updateProject(id, dto);
  }

  async getProject(id: string): Promise<Project> {
    return this.getProjectAdapter.getProject(id);
  }

  async getProjects(): Promise<Project[]> {
    return this.getProjectAdapter.getProjects();
  }

  async getAllProjects(): Promise<Project[]> {
    return this.getAllProjectsAdapter.getAllProjects();
  }

  async deleteProject(id: string): Promise<void> {
    return this.deleteProjectAdapter.deleteProject(id);
  }
}