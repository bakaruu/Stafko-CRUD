// remove-client-from-project.adapter.ts
import { Injectable } from '@nestjs/common';
import { ProjectsService } from '../../application/services/projects.service';
import { RemoveClientFromProjectPort } from '../../domain/ports/remove-client-from-project.port';

@Injectable()
export class RemoveClientFromProjectAdapter implements RemoveClientFromProjectPort {
    constructor(private readonly projectsService: ProjectsService) {}

    async removeClientFromProject(projectId: string): Promise<void> {
        return this.projectsService.removeClientFromProject(projectId);
    }
}
