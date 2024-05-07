import { Project } from '../../domain/entities/project.entity';
import { Repository } from 'typeorm';
export declare class GetAllProjectsAdapter {
    private projectsRepository;
    constructor(projectsRepository: Repository<Project>);
    getAllProjects(): Promise<Project[]>;
}
