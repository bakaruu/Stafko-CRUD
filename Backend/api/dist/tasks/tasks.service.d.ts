import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
export declare class TasksService {
    private task;
    create(createTaskDto: CreateTaskDto): Task;
    findAll(): Task[];
    findOne(id: number): string;
    update(id: number, updateTaskDto: UpdateTaskDto): string;
    remove(id: number): string;
}
