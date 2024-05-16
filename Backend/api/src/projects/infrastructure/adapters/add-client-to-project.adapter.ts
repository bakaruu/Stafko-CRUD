// add-client-to-project.adapter.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddClientToProjectPort } from '../../domain/ports/add-client-to-project.port';
import { Project } from '../../domain/entities/project.entity';
import { Client } from '../../../clients/domain/entities/client.entity';

@Injectable()
export class AddClientToProjectAdapter implements AddClientToProjectPort {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async addClientToProject(projectId: string, clientId: string): Promise<Project> {
    const project = await this.projectRepository.findOne({ 
      where: { id: projectId },
    });
    if (!project) {
      throw new NotFoundException(`Project with id ${projectId} not found`);
    }
    const client = await this.clientRepository.findOne({ where: { id: clientId } });
    if (!client) {
      throw new NotFoundException(`Client with id ${clientId} not found`);
    }
    project.client = client;
    await this.projectRepository.save(project);
    return project;
  }
}