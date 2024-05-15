import { ProjectsService } from '../../application/services/projects.service';
import { RemoveClientFromProjectPort } from '../../domain/ports/remove-client-from-project.port';
export declare class RemoveClientFromProjectAdapter implements RemoveClientFromProjectPort {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    removeClientFromProject(projectId: string): Promise<void>;
}
