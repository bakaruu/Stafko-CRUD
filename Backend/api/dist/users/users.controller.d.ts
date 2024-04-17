import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): import("src/users/entities/user.entity").User;
    findAll(): import("src/users/entities/user.entity").User[];
    findOne(id: string): import("src/users/entities/user.entity").User;
    update(id: string, updateUserDto: UpdateUserDto): import("src/users/entities/user.entity").User & UpdateUserDto;
    remove(id: string): void;
}
