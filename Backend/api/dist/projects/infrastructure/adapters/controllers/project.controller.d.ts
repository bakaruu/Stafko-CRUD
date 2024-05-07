import { CreateProjectDto } from '../../../application/dto/create-project.dto';
import { UpdateProjectDto } from '../../../application/dto/update-project.dto';
import { ProjectsService } from '../../../application/services/projects.service';
import { Project } from '../../../domain/entities/project.entity';
import { AddUsersToProjectPort } from '../../../domain/ports/add-users-to-project.port';
export declare class ProjectController {
    private readonly projectService;
    private readonly addUsersToProjectPort;
    constructor(projectService: ProjectsService, addUsersToProjectPort: AddUsersToProjectPort);
    createProject(dto: CreateProjectDto): Promise<Project>;
    addUsersToProject(id: string, userIds: string[]): Promise<Project>;
    updateProject(id: string, dto: UpdateProjectDto): Promise<Project>;
    getProject(id: string): Promise<Project>;
    getProjects(): Promise<Project[]>;
    deleteProject(id: string): Promise<void>;
}
