import { Project } from '../entities/project.entity';
export interface AddClientToProjectPort {
    addClientToProject(projectId: string, clientId: string): Promise<Project>;
}
