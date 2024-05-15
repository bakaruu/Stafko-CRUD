import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task, TaskType, TaskStatus } from '../../domain/entities/task.entity';
import { UpdateTaskPort } from '../../domain/ports/update-task.port';
import { UpdateTaskDto } from '../../application/dto/update-task.dto';


@Injectable()
export class UpdateTaskAdapter implements UpdateTaskPort {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async updateTask(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.taskRepository.preload({
      id: id,
      ...updateTaskDto,
      type: TaskType[updateTaskDto.type as keyof typeof TaskType],
      status: TaskStatus[updateTaskDto.status as keyof typeof TaskStatus],
    });
    if (!task) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    return this.taskRepository.save(task);
  }
}