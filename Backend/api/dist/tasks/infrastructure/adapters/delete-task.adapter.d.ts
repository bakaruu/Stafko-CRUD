import { Repository } from 'typeorm';
import { Task } from '../../domain/entities/task.entity';
import { DeleteTaskPort } from '../../domain/ports/delete-tasks.port';
export declare class DeleteTaskAdapter implements DeleteTaskPort {
    private readonly taskRepository;
    constructor(taskRepository: Repository<Task>);
    deleteTask(id: string): Promise<void>;
}
