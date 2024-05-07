import { Project } from '../entities/project.entity';
export interface GetAllProjectsPort {
    getAllProjects(): Promise<Project[]>;
}
