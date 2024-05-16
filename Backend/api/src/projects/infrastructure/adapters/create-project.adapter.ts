// create-project.adapter.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from '../../domain/entities/project.entity';
import { CreateProjectPort } from '../../domain/ports/create-project.port';
import { User } from 'src/users/domain/entities/user.entity';
import { Status } from '../../application/dto/create-project.dto';

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
    project.status = project.status ? project.status : Status.Pending;
    project.photoUrl = project.photoUrl ? project.photoUrl : "http://res.cloudinary.com/dqwqulk5l/image/upload/v1715173814/defaultProjectHome_ti0bid.jpg";


    return this.projectRepository.save(project);
  }
}