import { User } from "../entities/user.entity";
export interface GetUserByEmailPort {
    getUserByEmail(email: string): Promise<User | null>;
}
