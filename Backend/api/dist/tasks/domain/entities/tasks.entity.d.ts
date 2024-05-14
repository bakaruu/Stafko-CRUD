import { Project } from '../../../projects/domain/entities/project.entity';
export declare class Task {
    id: string;
    name: string;
    type: string;
    status: string;
    startTime: Date;
    endTime: Date;
    assignedTo: string;
    project: Project;
}
