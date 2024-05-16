import { Repository } from 'typeorm';
import { Project } from '../../domain/entities/project.entity';
import { Client } from '../../../clients/domain/entities/client.entity';
import { UpdateProjectClientPort } from '../../domain/ports/update-client-from-project.port';
export declare class UpdateProjectClientAdapter implements UpdateProjectClientPort {
    private readonly projectRepository;
    private readonly clientRepository;
    constructor(projectRepository: Repository<Project>, clientRepository: Repository<Client>);
    updateProjectClient(projectId: string, clientId: string): Promise<Project>;
}
