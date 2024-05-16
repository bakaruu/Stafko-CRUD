import { ProjectsService } from '../../application/services/projects.service';
import { RemoveUserFromProjectPort } from '../../domain/ports/delete-user-from-project.port';
export declare class RemoveUserFromProjectAdapter implements RemoveUserFromProjectPort {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    removeUserFromProject(projectId: string, userId: string): Promise<void>;
}
