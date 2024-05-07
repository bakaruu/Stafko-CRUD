// add-users-to-project.port.ts
import { Project } from '../entities/project.entity';

export interface AddUsersToProjectPort {
  addUsersToProject(projectId: string, userIds: string[]): Promise<Project>;
}