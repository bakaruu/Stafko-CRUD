import { Repository } from 'typeorm';
import { Project } from '../../domain/entities/project.entity';
import { CreateProjectPort } from '../../domain/ports/create-project.port';
export declare class CreateProjectAdapter implements CreateProjectPort {
    private readonly projectRepository;
    constructor(projectRepository: Repository<Project>);
    createProject(project: Project): Promise<Project>;
}
