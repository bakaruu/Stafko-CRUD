import { CreateUserDto } from '../../application/dto/create-user.dto';
import { User } from '../entities/user.entity';

export interface CreateUserPort {
  createUser(createUserDto: CreateUserDto): Promise<User>;
}
