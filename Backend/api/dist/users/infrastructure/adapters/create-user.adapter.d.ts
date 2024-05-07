import { CreateUserPort } from '../../domain/ports/create-user.port';
import { User } from '../../domain/entities/user.entity';
import { CreateUserDto } from '../../application/dto/create-user.dto';
import { Repository } from 'typeorm';
export declare class CreateUserAdapter implements CreateUserPort {
    private userRepository;
    constructor(userRepository: Repository<User>);
    createUser(createUserDto: CreateUserDto): Promise<User>;
}
