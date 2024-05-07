import { Project } from 'src/projects/domain/entities/project.entity';
export declare class Client {
    id: string;
    clientName: string;
    contactName: string;
    email: string;
    phone: string;
    projects: Project[];
    created_at: Date;
    updated_at: Date;
}
