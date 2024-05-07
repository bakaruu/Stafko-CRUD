import { UpdateUserDto } from '../../application/dto/update-user.dto';
import { User } from '../entities/user.entity';

export interface UpdateUserPort {
  updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<User | null>;
}
