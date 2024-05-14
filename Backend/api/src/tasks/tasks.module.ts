import { Module } from '@nestjs/common';
import { TasksController } from './infrastructure/controllers/task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from '../projects/domain/entities/project.entity';
import { Task } from './domain/entities/task.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Project, Task]) // Si estás utilizando TypeORM
    ],
    controllers: [TasksController],
    providers: [
        
        // Agrega aquí cualquier otro adaptador que estés utilizando
    ],
})
export class TasksModule {}