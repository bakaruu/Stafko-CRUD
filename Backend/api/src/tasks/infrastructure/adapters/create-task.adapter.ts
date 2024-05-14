// create-task.adapter.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task, TaskType } from '../../domain/entities/task.entity';
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
  ) {}

  async createTask(dto: CreateTaskDto): Promise<Task> {
    const project = await this.projectRepository.findOne({ where: { id: dto.projectId } });
    if (!project) {
        throw new NotFoundException(`Project with id ${dto.projectId} not found`);
    }

    const task = new Task();
    task.name = dto.name;
    task.type = dto.type as TaskType;
    task.status = dto.status;
    task.startTime = dto.startTime;
    task.endTime = dto.endTime;
    task.assignedTo = dto.assignedTo;
    task.project = project;

    return this.taskRepository.save(task);
  }
}