import { Delete, Module } from '@nestjs/common';
import { TasksController } from './infrastructure/controllers/task.controller';
import { TasksService } from '../tasks/application/services/tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateTaskToProjectAdapter } from '../tasks/infrastructure/adapters/create-tasks-to-project.adapter';
import { GetTaskToProjectAdapter } from './infrastructure/adapters/get-task-to-project.adapter';
import { Project } from '../projects/domain/entities/project.entity';
import { Task } from './domain/entities/tasks.entity';
import { DeleteTaskToProjectAdapter } from './infrastructure/adapters/delete-tasks-to-project.adapter';
import { UpdateOrPatchTaskInProjectAdapter } from './infrastructure/adapters/update-task-to-project.adapter';

@Module({
    imports: [
        TypeOrmModule.forFeature([Project, Task]) // Si estás utilizando TypeORM
    ],
    controllers: [TasksController],
    providers: [
        TasksService,
        CreateTaskToProjectAdapter,
        GetTaskToProjectAdapter,
        DeleteTaskToProjectAdapter,
        UpdateOrPatchTaskInProjectAdapter
        // Agrega aquí cualquier otro adaptador que estés utilizando
    ],
})
export class TasksModule {}