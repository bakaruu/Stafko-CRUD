// create-task.adapter.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task, TaskType, TaskStatus } from '../../domain/entities/task.entity';
import { CreateTaskPort } from '../../domain/ports/create-task.port';
import { Project } from '../../../projects/domain/entities/project.entity';
import { CreateTaskDto } from '../../application/dto/create-task.dto';

@Injectable()
export class CreateTaskAdapter implements CreateTaskPort {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) { }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const project = await this.projectRepository.findOne({ where: { id: createTaskDto.projectId } });
    
    
    if (!project) {
      throw new NotFoundException(`Project with id ${createTaskDto.projectId} not found`);
    }

    const task = new Task();
    task.name = createTaskDto.name;
    task.type = TaskType[createTaskDto.type as keyof typeof TaskType];
    task.status = TaskStatus[createTaskDto.status as keyof typeof TaskStatus];
    task.startTime = createTaskDto.startTime;
    task.endTime = createTaskDto.endTime;
    task.assignedTo = createTaskDto.assignedTo;
    task.project = project;

    return this.taskRepository.save(task);
  }
}