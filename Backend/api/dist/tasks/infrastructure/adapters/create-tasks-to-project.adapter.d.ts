import { Repository } from 'typeorm';
import { Project } from '../../../projects/domain/entities/project.entity';
import { Task } from '../../domain/entities/tasks.entity';
import { CreateTaskToProjectPort } from 'src/tasks/domain/ports/create-task-to-project.port';
export declare class CreateTaskToProjectAdapter implements CreateTaskToProjectPort {
    private readonly projectRepository;
    private readonly taskRepository;
    constructor(projectRepository: Repository<Project>, taskRepository: Repository<Task>);
    addTasksToProject(projectId: string, taskIds: string[]): Promise<Project>;
}
