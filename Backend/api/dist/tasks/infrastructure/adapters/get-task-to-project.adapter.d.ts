import { Repository } from 'typeorm';
import { Project } from '../../../projects/domain/entities/project.entity';
import { Task } from '../../domain/entities/tasks.entity';
import { GetTasksToProjectPort } from 'src/tasks/domain/ports/get-tasks-to-project.port';
export declare class GetTaskToProjectAdapter implements GetTasksToProjectPort {
    private readonly projectRepository;
    private readonly taskRepository;
    constructor(projectRepository: Repository<Project>, taskRepository: Repository<Task>);
    getTasksToProject(projectId: string): Promise<Task[]>;
    getTasks(projectId: string): Promise<Task[]>;
}
