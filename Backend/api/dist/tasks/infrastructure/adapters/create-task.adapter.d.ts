import { Repository } from 'typeorm';
import { Task } from '../../domain/entities/task.entity';
import { CreateTaskPort } from '../../domain/ports/create-task.port';
import { Project } from '../../../projects/domain/entities/project.entity';
import { CreateTaskDto } from '../../application/dto/create-task.dto';
export declare class CreateTaskAdapter implements CreateTaskPort {
    private readonly taskRepository;
    private readonly projectRepository;
    constructor(taskRepository: Repository<Task>, projectRepository: Repository<Project>);
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
}
