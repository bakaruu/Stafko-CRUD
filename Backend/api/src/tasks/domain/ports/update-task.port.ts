import { UpdateTaskDto } from "../../application/dto/update-task.dto";
import { Task } from "../entities/task.entity";

export interface UpdateTaskToProjectPort {
    updateOrPatchTaskInProject(taskId: string, updateTaskDto: UpdateTaskDto): Promise<Task>;
}