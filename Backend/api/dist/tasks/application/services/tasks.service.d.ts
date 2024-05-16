import { Task } from '../../domain/entities/task.entity';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { CreateTaskDto } from '../dto/create-task.dto';
import { CreateTaskAdapter } from 'src/tasks/infrastructure/adapters/create-task.adapter';
import { DeleteTaskAdapter } from 'src/tasks/infrastructure/adapters/delete-task.adapter';
import { GetTaskAdapter } from 'src/tasks/infrastructure/adapters/get-task.adapter';
import { UpdateTaskAdapter } from 'src/tasks/infrastructure/adapters/update-task.adapter';
import { GetAllTaskAdapter } from 'src/tasks/infrastructure/adapters/get-all-task.adapter';
export declare class TaskService {
    private readonly createTaskAdapter;
    private readonly deleteTaskAdapter;
    private readonly getTaskAdapter;
    private readonly updateTaskAdapter;
    private readonly getAllTaskAdapter;
    [x: string]: any;
    constructor(createTaskAdapter: CreateTaskAdapter, deleteTaskAdapter: DeleteTaskAdapter, getTaskAdapter: GetTaskAdapter, updateTaskAdapter: UpdateTaskAdapter, getAllTaskAdapter: GetAllTaskAdapter);
    create(createTaskDto: CreateTaskDto): Promise<Task>;
    delete(id: string): Promise<void>;
    findOne(id: string): Promise<Task>;
    findAll(): Promise<Task[]>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task>;
}
