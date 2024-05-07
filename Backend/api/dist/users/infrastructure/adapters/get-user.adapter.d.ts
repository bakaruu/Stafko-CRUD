import { GetUserPort } from '../../domain/ports/get-user.port';
import { User } from '../../domain/entities/user.entity';
import { Repository } from 'typeorm';
export declare class GetUserAdapter implements GetUserPort {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getUser(userId: string): Promise<User | null>;
}
