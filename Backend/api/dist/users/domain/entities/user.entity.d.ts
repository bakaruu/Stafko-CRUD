import { Project } from 'src/projects/domain/entities/project.entity';
export declare class User {
    id: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    role: UserRole;
    jobTitle: string;
    photoUrl: string;
    projects: Project[];
    created_at: Date;
    updated_at: Date;
}
export declare enum UserRole {
    ADMIN = "ADMIN",
    USER = "USER",
    FRONTEND = "Frontend",
    BACKEND = "Backend",
    FULLSTACK = "Fullstack",
    DEVOPS = "DevOps",
    QA = "QA",
    MOBILE = "Mobile",
    DESIGNER = "Designer",
    MANAGER = "Manager",
    HR = "HR"
}
