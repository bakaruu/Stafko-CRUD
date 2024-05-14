import { TasksService } from '../../application/services/tasks.service';
import { UpdateTaskDto } from '../../application/dto/update-task.dto';
export declare class TasksController {
    private readonly taskService;
    constructor(taskService: TasksService);
    addTasksToProject(projectId: string, taskIds: string[]): Promise<import("../../../projects/domain/entities/project.entity").Project>;
    deleteTaskFromProject(projectId: string, taskId: string): Promise<void>;
    updateTaskInProject(projectId: string, taskId: string, updateTaskDto: UpdateTaskDto): Promise<import("../../domain/entities/tasks.entity").Task>;
    patchTaskInProject(projectId: string, taskId: string, patchTaskDto: UpdateTaskDto): Promise<import("../../domain/entities/tasks.entity").Task>;
}
