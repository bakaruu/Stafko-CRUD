import { Task } from '../../domain/entities/task.entity';

export interface GetTaskPort {
  getTask(id: string): Promise<Task>;
}