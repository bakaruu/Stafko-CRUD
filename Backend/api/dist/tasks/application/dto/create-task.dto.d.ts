import { TaskStatus, TaskType } from 'src/tasks/domain/entities/task.entity';
export declare class CreateTaskDto {
    name: string;
    type: TaskType;
    status: TaskStatus;
    startTime: Date;
    endTime: Date;
    assignedTo: string;
    projectId: string;
}
