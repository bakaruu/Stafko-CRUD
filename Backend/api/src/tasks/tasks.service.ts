import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, TaskStatus } from './entities/task.entity';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {

  private task: Task[] = [
    {
      id: v4(),
      title: 'Tarea 1',
      description: 'Descripcion de la tarea 1',
      status: TaskStatus.PENDING
    },

  ]

  create(createTaskDto: CreateTaskDto): Task {
    const task: Task = {
      id: v4(),
      title: createTaskDto.title,
      description: createTaskDto.description,
      status: TaskStatus.PENDING, // New tasks are created with pending status
    };
    this.task.push(task);
    return task;
  }

  findAll() {
    return this.task;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
