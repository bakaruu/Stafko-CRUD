import { CreateProjectDto } from '../../application/dto/create-project.dto';
import { UpdateProjectDto } from '../../application/dto/update-project.dto';
import { ProjectsService } from '../../application/services/projects.service';
import { Project } from '../../domain/entities/project.entity';
import { AddUsersToProjectPort } from '../../domain/ports/add-users-to-project.port';
import { AddClientToProjectPort } from '../../domain/ports/add-client-to-project.port';
export declare class ProjectController {
    private readonly projectService;
    private readonly addUsersToProjectPort;
    private readonly addClientToProjectPort;
    constructor(projectService: ProjectsService, addUsersToProjectPort: AddUsersToProjectPort, addClientToProjectPort: AddClientToProjectPort);
    createProject(dto: CreateProjectDto): Promise<Project>;
    addUsersToProject(id: string, userIds: string[]): Promise<Project>;
    addClientToProject(id: string, clientId: string): Promise<Project>;
    updateProject(id: string, dto: UpdateProjectDto): Promise<Project>;
    partialUpdateProject(id: string, dto: UpdateProjectDto): Promise<Project>;
    updateProjectClient(projectId: string, clientId: string): Promise<Project>;
    getProject(id: string): Promise<Project>;
    getProjects(): Promise<Project[]>;
    deleteProject(id: string): Promise<void>;
    removeUserFromProject(projectId: string, userId: string): Promise<void>;
    removeClientFromProject(projectId: string): Promise<void>;
}
