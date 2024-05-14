import { UpdateTaskDto } from "src/tasks/application/dto/update-task.dto";
import { Task } from "src/tasks/domain/entities/tasks.entity";
import { Repository } from "typeorm";
export declare class UpdateOrPatchTaskInProjectAdapter {
    private readonly taskRepository;
    constructor(taskRepository: Repository<Task>);
    updateOrPatchTaskInProject(taskId: string, updateTaskDto: UpdateTaskDto): Promise<Task>;
}
