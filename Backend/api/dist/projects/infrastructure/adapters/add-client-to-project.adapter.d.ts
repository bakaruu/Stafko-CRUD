import { Repository } from 'typeorm';
import { AddClientToProjectPort } from '../../domain/ports/add-client-to-project.port';
import { Project } from '../../domain/entities/project.entity';
import { Client } from '../../../clients/domain/entities/client.entity';
export declare class AddClientToProjectAdapter implements AddClientToProjectPort {
    private readonly projectRepository;
    private readonly clientRepository;
    constructor(projectRepository: Repository<Project>, clientRepository: Repository<Client>);
    addClientToProject(projectId: string, clientId: string): Promise<Project>;
}
