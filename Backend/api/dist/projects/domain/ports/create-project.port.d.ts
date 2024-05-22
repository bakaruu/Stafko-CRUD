import { Project } from '../entities/project.entity';
export interface CreateProjectPort {
    createProject(project: Project, userIds: string[], clientId: string): Promise<Project>;
}
