import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from '../../../projects/domain/entities/project.entity';
import { Task } from '../../domain/entities/tasks.entity';
import { CreateTaskToProjectPort } from 'src/tasks/domain/ports/create-task-to-project.port';
import { UpdateTaskDto } from '../dto/update-task.dto';

@Injectable() // Cambia el decorador a @Injectable
export class TasksService { // Cambia el nombre de la clase a TaskService
    constructor(
        @InjectRepository(Project)
        private readonly projectRepository: Repository<Project>,
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>,
    ) {}

    async addTasksToProject(projectId: string, taskIds: string[]): Promise<Project> {
        const project = await this.projectRepository.findOne({ 
            where: { id: projectId },
            relations: ['tasks'] 
        });
        if (!project) {
            throw new NotFoundException(`Project with id ${projectId} not found`);
        }
        const tasks = await this.taskRepository.findByIds(taskIds);
        if (tasks.length !== taskIds.length) {
            throw new NotFoundException('One or more tasks not found');
        }
        project.tasks.push(...tasks);
        await this.projectRepository.save(project);
        return project;
    }

    async deleteTaskFromProject(projectId: string, taskId: string): Promise<void> {
        const project = await this.projectRepository.findOne({ 
            where: { id: projectId },
            relations: ['tasks'] 
        });
        if (!project) {
            throw new NotFoundException(`Project with id ${projectId} not found`);
        }
        project.tasks = project.tasks.filter(task => task.id !== taskId);
        await this.projectRepository.save(project);
    }

    async updateTaskInProject(projectId: string, taskId: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
        const project = await this.projectRepository.findOne({ 
            where: { id: projectId },
            relations: ['tasks'] 
        });
        if (!project) {
            throw new NotFoundException(`Project with id ${projectId} not found`);
        }
        const task = project.tasks.find(task => task.id === taskId);
        if (!task) {
            throw new NotFoundException(`Task with id ${taskId} not found in project`);
        }
        const updatedTask = this.taskRepository.merge(task, updateTaskDto);
        return this.taskRepository.save(updatedTask);
    }
}