import { Repository } from 'typeorm';
import { Project } from '../../domain/entities/project.entity';
import { CreateProjectPort } from '../../domain/ports/create-project.port';
import { User } from 'src/users/domain/entities/user.entity';
export declare class CreateProjectAdapter implements CreateProjectPort {
    private readonly projectRepository;
    private readonly userRepository;
    constructor(projectRepository: Repository<Project>, userRepository: Repository<User>);
    createProject(project: Project, userIds: string[]): Promise<Project>;
}
