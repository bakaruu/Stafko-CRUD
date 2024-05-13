// create-project.adapter.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from '../../domain/entities/project.entity';
import { CreateProjectPort } from '../../domain/ports/create-project.port';
import { User } from 'src/users/domain/entities/user.entity';

@Injectable()
export class CreateProjectAdapter implements CreateProjectPort {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createProject(project: Project, userIds: string[]): Promise<Project> {
    const users = await this.userRepository.findByIds(userIds);
    if (users.length !== userIds.length) {
      throw new NotFoundException(`Some users with ids ${userIds.join(', ')} not found`);
    }

    project.users = users;

    return this.projectRepository.save(project);
  }
}