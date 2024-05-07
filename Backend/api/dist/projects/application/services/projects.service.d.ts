import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';
import { Project } from '../../domain/entities/project.entity';
import { Client } from '../../../clients/domain/entities/client.entity';
import { Repository } from 'typeorm';
import { CreateProjectAdapter } from 'src/projects/infrastructure/adapters/create-project.adapter';
import { DeleteProjectAdapter } from 'src/projects/infrastructure/adapters/delete-project.adapter';
import { GetProjectAdapter } from 'src/projects/infrastructure/adapters/get-project.adapter';
import { UpdateProjectAdapter } from 'src/projects/infrastructure/adapters/update-project.adapter';
import { GetAllProjectsAdapter } from '../../infrastructure/adapters/get-all-project.adapter';
export declare class ProjectsService {
    private readonly clientRepository;
    private readonly createProjectAdapter;
    private readonly updateProjectAdapter;
    private readonly getProjectAdapter;
    private readonly deleteProjectAdapter;
    private readonly getAllProjectsAdapter;
    constructor(clientRepository: Repository<Client>, createProjectAdapter: CreateProjectAdapter, updateProjectAdapter: UpdateProjectAdapter, getProjectAdapter: GetProjectAdapter, deleteProjectAdapter: DeleteProjectAdapter, getAllProjectsAdapter: GetAllProjectsAdapter);
    createProject(dto: CreateProjectDto): Promise<Project>;
    updateProject(id: string, dto: UpdateProjectDto): Promise<Project>;
    getProject(id: string): Promise<Project>;
    getProjects(): Promise<Project[]>;
    getAllProjects(): Promise<Project[]>;
    deleteProject(id: string): Promise<void>;
}
