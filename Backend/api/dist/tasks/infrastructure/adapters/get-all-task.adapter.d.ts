import { Task } from "src/tasks/domain/entities/task.entity";
import { GetAllTaskPort } from "src/tasks/domain/ports/get-all-task.port";
import { Repository } from "typeorm";
export declare class GetAllTaskAdapter implements GetAllTaskPort {
    private readonly taskRepository;
    constructor(taskRepository: Repository<Task>);
    getAllTasks(): Promise<Task[]>;
}
