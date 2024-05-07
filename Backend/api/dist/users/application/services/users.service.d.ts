import { CreateUserAdapter } from '../../infrastructure/adapters/create-user.adapter';
import { GetUserAdapter } from '../../infrastructure/adapters/get-user.adapter';
import { UpdateUserAdapter } from '../../infrastructure/adapters/update-user.adapter';
import { DeleteUserAdapter } from '../../infrastructure/adapters/delete-user.adapter';
import { User } from '../../domain/entities/user.entity';
import { CreateUserDto } from '../../application/dto/create-user.dto';
import { UpdateUserDto } from '../../application/dto/update-user.dto';
import { GetAllUsersAdapter } from '../../infrastructure/adapters/get-all-user.adapter';
import { GetUserByEmailAdapter } from 'src/users/infrastructure/adapters/get-user-by-email.adapter';
export declare class UsersService {
    private readonly createUserAdapter;
    private readonly getUserAdapter;
    private readonly updateUserAdapter;
    private readonly deleteUserAdapter;
    private readonly getAllUsersAdapter;
    private readonly getUserByEmailAdapter;
    constructor(createUserAdapter: CreateUserAdapter, getUserAdapter: GetUserAdapter, updateUserAdapter: UpdateUserAdapter, deleteUserAdapter: DeleteUserAdapter, getAllUsersAdapter: GetAllUsersAdapter, getUserByEmailAdapter: GetUserByEmailAdapter);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    getUser(userId: string): Promise<User | null>;
    getAllUsers(): Promise<User[]>;
    getUserByEmail(email: string): Promise<User | null>;
    updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<User | null>;
    deleteUser(userId: string): Promise<boolean>;
}
