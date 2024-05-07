import { CreateUserDto } from '../../../application/dto/create-user.dto';
import { UpdateUserDto } from '../../../application/dto/update-user.dto';
import { UsersService } from '../../../application/services/users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("../../../domain/entities/user.entity").User>;
    findOne(id: string): Promise<import("../../../domain/entities/user.entity").User>;
    findAll(): Promise<import("../../../domain/entities/user.entity").User[]>;
    getUserByEmail(email: string): Promise<import("../../../domain/entities/user.entity").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("../../../domain/entities/user.entity").User>;
    updatePartial(id: string, updateUserDto: UpdateUserDto): Promise<import("../../../domain/entities/user.entity").User>;
    remove(id: string): Promise<boolean>;
}
