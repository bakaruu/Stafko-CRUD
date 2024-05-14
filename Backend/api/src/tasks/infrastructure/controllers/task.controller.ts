import { Controller, Post, Delete, Put, Patch, Body, Param } from '@nestjs/common';
import { TasksService } from '../../application/services/tasks.service'
import { UpdateTaskDto } from '../../application/dto/update-task.dto';
import { CreateTaskDto } from 'src/tasks/application/dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TasksService) { }

    
}