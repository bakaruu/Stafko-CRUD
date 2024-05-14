import { Project } from '../../../projects/domain/entities/project.entity';
export interface CreateTaskToProjectPort {
    addTasksToProject(projectId: string, taskIds: string[]): Promise<Project>;
}
