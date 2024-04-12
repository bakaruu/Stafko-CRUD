import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserRole } from './entities/user.entity';
export declare class UsersService {
    private users;
    create(createUserDto: CreateUserDto): User;
    findAll(): {
        id: string;
        name: string;
        email: string;
        password: string;
        role: UserRole;
        created_at: Date;
        updated_at: Date;
    }[];
    findOne(id: string): {
        id: string;
        name: string;
        email: string;
        password: string;
        role: UserRole;
        created_at: Date;
        updated_at: Date;
    };
    update(id: string, updateUserDto: UpdateUserDto): {
        id: string;
        name: string;
        email: string;
        password: string;
        role: UserRole;
        created_at: Date;
        updated_at: Date;
    } & UpdateUserDto;
    remove(id: string): void;
}
