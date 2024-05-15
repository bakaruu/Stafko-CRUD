import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './domain/entities/task.entity';
import { TaskService } from './application/services/tasks.service';
import { TaskController } from './infrastructure/controllers/task.controller';
import { CreateTaskAdapter } from './infrastructure/adapters/create-task.adapter';
import { DeleteTaskAdapter } from './infrastructure/adapters/delete-task.adapter';
import { GetTaskAdapter } from './infrastructure/adapters/get-task.adapter';
import { UpdateTaskAdapter } from './infrastructure/adapters/update-task.adapter';
import { GetAllTaskAdapter } from './infrastructure/adapters/get-all-task.adapter';
import { ProjectsModule } from 'src/projects/projects.module';
import { Project } from 'src/projects/domain/entities/project.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task, Project]),
    ProjectsModule // Registra Repository<Task> como un proveedor
  ],
  controllers: [TaskController],
  providers: [
    TaskService,
    CreateTaskAdapter,
    DeleteTaskAdapter,
    GetTaskAdapter,
    UpdateTaskAdapter,
    GetAllTaskAdapter,
  ],
})
export class TaskModule {}