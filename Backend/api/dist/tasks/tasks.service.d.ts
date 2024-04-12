import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
export declare class TasksService {
    private tasks;
    create(createTaskDto: CreateTaskDto): Task;
    findAll(): Task[];
    findOne(id: string): Task;
    update(id: string, updateTaskDto: UpdateTaskDto): Task & UpdateTaskDto;
    remove(id: string): void;
}
