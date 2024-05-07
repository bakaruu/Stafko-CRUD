import { GetUserByEmailPort } from '../../domain/ports/get-user-by-email.port';
import { User } from '../../domain/entities/user.entity';
import { Repository } from 'typeorm';
export declare class GetUserByEmailAdapter implements GetUserByEmailPort {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getUserByEmail(email: string): Promise<User | null>;
}
