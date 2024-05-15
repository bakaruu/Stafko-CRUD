import { Body, Controller, Delete, Get, Injectable, Param, Post, Put } from '@nestjs/common';
import { Task } from 'src/tasks/domain/entities/task.entity';
import { UpdateTaskDto } from '../../application/dto/update-task.dto';
import { CreateTaskDto } from 'src/tasks/application/dto/create-task.dto';
import { TaskService } from 'src/tasks/application/services/tasks.service';


@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }

    @Post()
    create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
        return this.taskService.create(createTaskDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<void> {
        return this.taskService.delete(id);
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Task> {
        return this.taskService.findOne(id);
    }

    @Get()
    findAll(): Promise<Task[]> {
        return this.taskService.findAll();
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto): Promise<Task> {
        return this.taskService.update(id, updateTaskDto);
    }
}