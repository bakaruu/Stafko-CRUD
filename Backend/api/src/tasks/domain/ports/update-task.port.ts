import { UpdateTaskDto } from "../../application/dto/update-task.dto";
import { Task } from "../entities/task.entity";

export interface UpdateTaskPort {
    updateTask(id: string, updateTaskDto: UpdateTaskDto): Promise<Task>;
  }