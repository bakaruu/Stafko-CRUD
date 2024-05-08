import { Project } from 'src/projects/domain/entities/project.entity';
export declare class User {
    id: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    role: UserRole;
    photoUrl: string;
    projects: Project[];
    created_at: Date;
    updated_at: Date;
}
export declare enum UserRole {
    ADMIN = "Admin",
    USER = "User",
    CLIENT = "Client",
    FRONTEND = "Frontend",
    BACKEND = "Backend",
    FULLSTACK = "Fullstack",
    DEVOPS = "DevOps",
    MOBILE = "Mobile",
    MANAGER = "Manager",
    HR = "HR"
}
