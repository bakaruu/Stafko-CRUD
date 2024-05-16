import { CreateTaskDto } from '../../application/dto/create-task.dto';
import { Task } from '../entities/task.entity';
export interface CreateTaskPort {
    createTask(dto: CreateTaskDto): Promise<Task>;
}
