import { Project } from '../entities/project.entity';
export interface GetProjectPort {
    getProject(id: string): Promise<Project>;
    getProjects(): Promise<Project[]>;
}
