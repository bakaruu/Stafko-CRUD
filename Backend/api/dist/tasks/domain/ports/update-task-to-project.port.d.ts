import { UpdateTaskDto } from "../../application/dto/update-task.dto";
import { Task } from "../entities/tasks.entity";
export interface UpdateTaskToProjectPort {
    updateOrPatchTaskInProject(taskId: string, updateTaskDto: UpdateTaskDto): Promise<Task>;
}
