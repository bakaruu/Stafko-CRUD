// i-get-all-projects.port.ts
import { Project } from '../entities/project.entity';

export interface GetAllProjectsPort {
  getAllProjects(): Promise<Project[]>;
}