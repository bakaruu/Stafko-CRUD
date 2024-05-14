import { Task } from '../entities/tasks.entity';

export interface GetTasksToProjectPort {
    getTasksToProject(projectId: string): Promise<Task[]>;
}