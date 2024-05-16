// update-project-client.adapter.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from '../../domain/entities/project.entity';
import { Client } from '../../../clients/domain/entities/client.entity';
import { UpdateProjectClientPort } from '../../domain/ports/update-client-from-project.port';

@Injectable()
export class UpdateProjectClientAdapter implements UpdateProjectClientPort {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async updateProjectClient(projectId: string, clientId: string): Promise<Project> {
    const project = await this.projectRepository.findOne({ where: { id: projectId } });
    if (!project) throw new Error('Project not found');
  
    const client = await this.clientRepository.findOne({ where: { id: clientId } });
    if (!client) throw new Error('Client not found');
  
    project.client = client;
    await this.projectRepository.save(project);
  
    return project;
  }
}