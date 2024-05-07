import { Repository } from 'typeorm';
import { Project } from '../../domain/entities/project.entity';
import { GetProjectPort } from '../../domain/ports/get-project.port';
export declare class GetProjectAdapter implements GetProjectPort {
    private readonly projectRepository;
    constructor(projectRepository: Repository<Project>);
    getProject(id: string): Promise<Project>;
    getProjects(): Promise<Project[]>;
}
