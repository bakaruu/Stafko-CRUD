import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private users;
    create(createUserDto: CreateUserDto): User;
    findAll(): User[];
    findOne(id: string): User;
    update(id: string, updateUserDto: UpdateUserDto): User & UpdateUserDto;
    remove(id: string): void;
}
