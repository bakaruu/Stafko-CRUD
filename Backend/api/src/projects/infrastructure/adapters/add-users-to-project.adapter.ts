// add-users-to-project.adapter.ts
import { Injectable } from '@nestjs/common';
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
    const users = await this.userRepository.findByIds(userIds);
    project.users.push(...users);
    await this.projectRepository.save(project);
    return project;
  }
}