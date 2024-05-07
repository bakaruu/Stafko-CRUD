import { UpdateUserPort } from '../../domain/ports/update-user.port';
import { UpdateUserDto } from '../../application/dto/update-user.dto';
import { User } from '../../domain/entities/user.entity';
import { Repository } from 'typeorm';
export declare class UpdateUserAdapter implements UpdateUserPort {
    private userRepository;
    constructor(userRepository: Repository<User>);
    updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<User | null>;
}
