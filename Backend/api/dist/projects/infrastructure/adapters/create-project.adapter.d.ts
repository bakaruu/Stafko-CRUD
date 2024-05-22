import { Repository } from 'typeorm';
import { Project } from '../../domain/entities/project.entity';
import { CreateProjectPort } from '../../domain/ports/create-project.port';
import { User } from 'src/users/domain/entities/user.entity';
import { Client } from 'src/clients/domain/entities/client.entity';
export declare class CreateProjectAdapter implements CreateProjectPort {
    private readonly projectRepository;
    private readonly userRepository;
    private readonly clientRepository;
    constructor(projectRepository: Repository<Project>, userRepository: Repository<User>, clientRepository: Repository<Client>);
    createProject(project: Project, userIds: string[], clientId: string): Promise<Project>;
}
