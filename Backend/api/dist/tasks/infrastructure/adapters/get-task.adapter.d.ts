import { Repository } from 'typeorm';
import { Task } from '../../domain/entities/task.entity';
import { GetTaskPort } from '../../domain/ports/get-task.port';
export declare class GetTaskAdapter implements GetTaskPort {
    private readonly taskRepository;
    [x: string]: any;
    constructor(taskRepository: Repository<Task>);
    getTask(id: string): Promise<Task>;
}
