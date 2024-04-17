import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(createTaskDto: CreateTaskDto): import("src/tasks/entities/task.entity").Task;
    findAll(): import("src/tasks/entities/task.entity").Task[];
    findOne(id: string): import("src/tasks/entities/task.entity").Task;
    updateTask(id: string, updateTaskDto: UpdateTaskDto): import("src/tasks/entities/task.entity").Task & UpdateTaskDto;
    update(id: string, updateTaskDto: UpdateTaskDto): import("src/tasks/entities/task.entity").Task & UpdateTaskDto;
    remove(id: string): void;
}
