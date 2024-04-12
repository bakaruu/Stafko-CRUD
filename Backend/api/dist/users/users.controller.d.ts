import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): import("./entities/user.entity").User;
    findAll(): {
        id: string;
        name: string;
        email: string;
        password: string;
        role: import("./entities/user.entity").UserRole;
        created_at: Date;
        updated_at: Date;
    }[];
    findOne(id: string): {
        id: string;
        name: string;
        email: string;
        password: string;
        role: import("./entities/user.entity").UserRole;
        created_at: Date;
        updated_at: Date;
    };
    update(id: string, updateUserDto: UpdateUserDto): {
        id: string;
        name: string;
        email: string;
        password: string;
        role: import("./entities/user.entity").UserRole;
        created_at: Date;
        updated_at: Date;
    } & UpdateUserDto;
    remove(id: string): void;
}
