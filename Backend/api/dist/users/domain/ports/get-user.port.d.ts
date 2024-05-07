import { User } from '../entities/user.entity';
export interface GetUserPort {
    getUser(userId: string): Promise<User | null>;
}
