// create-project.port.ts
import { Project } from '../entities/project.entity';

export interface CreateProjectPort {
  createProject(project: Project): Promise<Project>;
}