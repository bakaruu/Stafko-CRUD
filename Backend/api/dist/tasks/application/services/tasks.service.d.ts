import { Repository } from 'typeorm';
import { Project } from '../../../projects/domain/entities/project.entity';
import { Task } from '../../domain/entities/task.entity';
export declare class TasksService {
    private readonly projectRepository;
    private readonly taskRepository;
    constructor(projectRepository: Repository<Project>, taskRepository: Repository<Task>);
}
