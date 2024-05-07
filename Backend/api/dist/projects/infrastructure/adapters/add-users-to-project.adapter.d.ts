import { Repository } from 'typeorm';
import { AddUsersToProjectPort } from '../../domain/ports/add-users-to-project.port';
import { Project } from '../../domain/entities/project.entity';
import { User } from '../../../users/domain/entities/user.entity';
export declare class AddUsersToProjectAdapter implements AddUsersToProjectPort {
    private readonly projectRepository;
    private readonly userRepository;
    constructor(projectRepository: Repository<Project>, userRepository: Repository<User>);
    addUsersToProject(projectId: string, userIds: string[]): Promise<Project>;
}
