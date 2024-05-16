import { Project } from "../entities/project.entity";
export interface UpdateProjectClientPort {
    updateProjectClient(projectId: string, clientId: string): Promise<Project>;
}
