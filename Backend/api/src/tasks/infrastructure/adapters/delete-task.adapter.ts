import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Project } from "src/projects/domain/entities/project.entity";
import { Task } from "src/tasks/domain/entities/task.entity";
import { Repository } from "typeorm";

@Injectable()
export class DeleteTaskToProjectAdapter {
    constructor(
        @InjectRepository(Project)
        private readonly projectRepository: Repository<Project>,
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>,
    ) {}

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
}