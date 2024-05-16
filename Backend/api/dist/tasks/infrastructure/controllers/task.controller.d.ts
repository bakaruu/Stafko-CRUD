import { Task } from 'src/tasks/domain/entities/task.entity';
import { UpdateTaskDto } from '../../application/dto/update-task.dto';
import { CreateTaskDto } from 'src/tasks/application/dto/create-task.dto';
import { TaskService } from 'src/tasks/application/services/tasks.service';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(createTaskDto: CreateTaskDto): Promise<Task>;
    delete(id: string): Promise<void>;
    findOne(id: string): Promise<Task>;
    findAll(): Promise<Task[]>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task>;
}
