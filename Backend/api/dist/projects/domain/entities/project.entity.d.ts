import { Client } from "../../../clients/domain/entities/client.entity";
import { User } from "../../../users/domain/entities/user.entity";
import { Task } from "../../../tasks/domain/entities/task.entity";
export declare class Project {
    id: string;
    name: string;
    description: string;
    photoUrl: string;
    progress: number;
    status: string;
    deadline: String;
    client: Client;
    users: User[];
    tasks: Task[];
    created_at: Date;
    updated_at: Date;
}
