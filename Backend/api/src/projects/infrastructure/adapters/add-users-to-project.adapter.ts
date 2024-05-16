// add-users-to-project.adapter.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddUsersToProjectPort } from '../../domain/ports/add-users-to-project.port';
import { Project } from '../../domain/entities/project.entity';
import { User } from '../../../users/domain/entities/user.entity';

@Injectable()
export class AddUsersToProjectAdapter implements AddUsersToProjectPort {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async addUsersToProject(projectId: string, userIds: string[]): Promise<Project> {
    const project = await this.projectRepository.findOne({ 
      where: { id: projectId },
      relations: ['users'] 
    });
    if (!project) {
      throw new NotFoundException(`Project with id ${projectId} not found`);
    }
    const users = await this.userRepository.findByIds(userIds);
    if (users.length !== userIds.length) {
      throw new NotFoundException('One or more users not found');
    }
    project.users.push(...users);
    await this.projectRepository.save(project);
    return project;
  }
}