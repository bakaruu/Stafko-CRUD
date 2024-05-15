import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from '../../domain/entities/task.entity';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { CreateTaskDto } from '../dto/create-task.dto';
import { CreateTaskAdapter } from 'src/tasks/infrastructure/adapters/create-task.adapter';
import { DeleteTaskAdapter } from 'src/tasks/infrastructure/adapters/delete-task.adapter';
import { GetTaskAdapter } from 'src/tasks/infrastructure/adapters/get-task.adapter';
import { UpdateTaskAdapter } from 'src/tasks/infrastructure/adapters/update-task.adapter';
import { GetAllTaskAdapter } from 'src/tasks/infrastructure/adapters/get-all-task.adapter';


@Injectable()
export class TaskService {
  [x: string]: any;
  constructor(
    private readonly createTaskAdapter: CreateTaskAdapter,
    private readonly deleteTaskAdapter: DeleteTaskAdapter,
    private readonly getTaskAdapter: GetTaskAdapter,
    private readonly updateTaskAdapter: UpdateTaskAdapter,
    private readonly getAllTaskAdapter: GetAllTaskAdapter,
  ) {}

  create(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.createTaskAdapter.createTask(createTaskDto);
  }

  delete(id: string): Promise<void> {
    return this.deleteTaskAdapter.deleteTask(id);
  }

  findOne(id: string): Promise<Task> {
    return this.getTaskAdapter.getTask(id);
  }

  findAll(): Promise<Task[]> {
    return this.getAllTaskAdapter.getAllTasks(); // Llama a getAllTasks() en GetAllTaskAdapter
  }

  update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    return this.updateTaskAdapter.updateTask(id, updateTaskDto);
  }
}