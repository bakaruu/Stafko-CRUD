import { DeleteUserPort } from '../../domain/ports/delete-user.port';
import { User } from '../../domain/entities/user.entity';
import { Repository } from 'typeorm';
export declare class DeleteUserAdapter implements DeleteUserPort {
    private userRepository;
    constructor(userRepository: Repository<User>);
    deleteUser(userId: string): Promise<boolean>;
}
