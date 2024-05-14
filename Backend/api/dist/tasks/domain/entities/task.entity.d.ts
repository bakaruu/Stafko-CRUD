import { Project } from '../../../projects/domain/entities/project.entity';
export declare enum TaskType {
    Frontend = "Frontend",
    Backend = "Backend"
}
export declare class Task {
    id: string;
    name: string;
    type: TaskType;
    status: string;
    startTime: Date;
    endTime: Date;
    assignedTo: string;
    clockifyTimerId: string;
    project: Project;
}
