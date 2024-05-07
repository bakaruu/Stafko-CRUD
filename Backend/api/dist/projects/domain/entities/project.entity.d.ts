import { Client } from "../../../clients/domain/entities/client.entity";
import { User } from "../../../users/domain/entities/user.entity";
export declare class Project {
    id: string;
    name: string;
    description: string;
    photoUrl: string;
    client: Client;
    users: User[];
    created_at: Date;
    updated_at: Date;
}
