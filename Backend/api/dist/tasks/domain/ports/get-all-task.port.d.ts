import { Task } from '../../domain/entities/task.entity';
export interface GetAllTaskPort {
    getAllTasks(): Promise<Task[]>;
}
