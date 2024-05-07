import { Repository } from 'typeorm';
import { Project } from '../../domain/entities/project.entity';
import { DeleteProjectPort } from '../../domain/ports/delete-project.port';
export declare class DeleteProjectAdapter implements DeleteProjectPort {
    private readonly projectRepository;
    constructor(projectRepository: Repository<Project>);
    deleteProject(id: string): Promise<void>;
}
