import { Module } from '@nestjs/common';
import { ProjectController } from './infrastructure/controllers/project.controller';
import { ProjectsService } from './application/services/projects.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './domain/entities/project.entity';
import { CreateProjectAdapter } from './infrastructure/adapters/create-project.adapter';
import { DeleteProjectAdapter } from './infrastructure/adapters/delete-project.adapter';
import { GetProjectAdapter } from './infrastructure/adapters/get-project.adapter';
import { UpdateProjectAdapter } from './infrastructure/adapters/update-project.adapter';
import { GetAllProjectsAdapter } from './infrastructure/adapters/get-all-project.adapter';
import { AddUsersToProjectAdapter } from './infrastructure/adapters/add-users-to-project.adapter';
import { UsersModule } from '../users/application/users.module';
import { Client } from '../clients/domain/entities/client.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Project, Client]), UsersModule],
    controllers: [ProjectController],
    providers: [
      ProjectsService,
      CreateProjectAdapter,
      GetProjectAdapter,
      UpdateProjectAdapter,
      DeleteProjectAdapter,
      GetAllProjectsAdapter,
      {
        provide: 'AddUsersToProjectPort',
        useClass: AddUsersToProjectAdapter,
      },
    ],
  })
  export class ProjectsModule {}




