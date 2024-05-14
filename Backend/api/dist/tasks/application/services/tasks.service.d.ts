import { Repository } from 'typeorm';
import { Project } from '../../../projects/domain/entities/project.entity';
import { Task } from '../../domain/entities/tasks.entity';
import { UpdateTaskDto } from '../dto/update-task.dto';
export declare class TasksService {
    private readonly projectRepository;
    private readonly taskRepository;
    constructor(projectRepository: Repository<Project>, taskRepository: Repository<Task>);
    addTasksToProject(projectId: string, taskIds: string[]): Promise<Project>;
    deleteTaskFromProject(projectId: string, taskId: string): Promise<void>;
    updateTaskInProject(projectId: string, taskId: string, updateTaskDto: UpdateTaskDto): Promise<Task>;
}
