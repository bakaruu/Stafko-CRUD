import { Task } from '../entities/task.entity';
export interface GetTasksToProjectPort {
    getTasksToProject(projectId: string): Promise<Task[]>;
}
