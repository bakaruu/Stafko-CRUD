import { Repository } from 'typeorm';
import { AddTasksToProjectPort } from '../../../projects/domain/ports/ ';
import { Project } from '../../../projects/domain/entities/project.entity';
import { Task } from '../../domain/entities/tasks.entity';
export declare class AddTasksToProjectAdapter implements AddTasksToProjectPort {
    private readonly projectRepository;
    private readonly taskRepository;
    constructor(projectRepository: Repository<Project>, taskRepository: Repository<Task>);
    addTasksToProject(projectId: string, taskIds: string[]): Promise<Project>;
}
