import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, TaskStatus } from './entities/task.entity';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {

  private tasks: Task[] = [
    {
      id: v4(),
      title: 'Tarea 1',
      description: 'Descripcion de la tarea 1',
      status: TaskStatus.PENDING,
      created_at: new Date(),
      updated_at: new Date()
    },

  ]

  create(createTaskDto: CreateTaskDto): Task {
    const existingTask = this.tasks.find(task => task.title === createTaskDto.title);
    if (existingTask) {
      //mirar el error para controlarlo bien
      throw new Error('A task with this name already exists.');
    }
  
    const tasks: Task = {
      id: v4(),
      title: createTaskDto.title,
      description: createTaskDto.description,
      status: TaskStatus.PENDING, // New tasks are created with pending status
      created_at: new Date(),
      updated_at: new Date()
    };
    this.tasks.push(tasks);
    return tasks;
  }

  findAll() {
    return this.tasks;
  }

  findOne(id: string): Task {
    return this.tasks.find(task => task.id === id);
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    const task = this.findOne(id);
    if (!task) {
      return null;
    }
    const newTask = Object.assign(task, updateTaskDto);
    this.tasks = this.tasks.map(task => task.id === id ? 
      newTask : task);

    return newTask;
  }

  remove(id: string){
    this.tasks =this.tasks.filter(task => task.id !== id);
  }
}
