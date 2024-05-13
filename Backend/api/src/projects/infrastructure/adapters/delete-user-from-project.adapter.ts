// remove-user-from-project.adapter.ts
import { Injectable } from '@nestjs/common';
import { ProjectsService } from '../../application/services/projects.service';
import { RemoveUserFromProjectPort } from '../../domain/ports/delete-user-from-project.port';

@Injectable()
export class RemoveUserFromProjectAdapter implements RemoveUserFromProjectPort {
  constructor(private readonly projectsService: ProjectsService) {}

  async removeUserFromProject(projectId: string, userId: string): Promise<void> {
    return this.projectsService.removeUserFromProject(projectId, userId);
  }
}
