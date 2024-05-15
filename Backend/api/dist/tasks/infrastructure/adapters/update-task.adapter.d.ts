import { Repository } from 'typeorm';
import { Task } from '../../domain/entities/task.entity';
import { UpdateTaskPort } from '../../domain/ports/update-task.port';
import { UpdateTaskDto } from '../../application/dto/update-task.dto';
export declare class UpdateTaskAdapter implements UpdateTaskPort {
    private readonly taskRepository;
    constructor(taskRepository: Repository<Task>);
    updateTask(id: string, updateTaskDto: UpdateTaskDto): Promise<Task>;
}
