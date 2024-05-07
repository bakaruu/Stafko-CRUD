import { Injectable } from '@nestjs/common';
import { CreateUserAdapter } from '../../infrastructure/adapters/create-user.adapter';
import { GetUserAdapter } from '../../infrastructure/adapters/get-user.adapter';
import { UpdateUserAdapter } from '../../infrastructure/adapters/update-user.adapter';
import { DeleteUserAdapter} from '../../infrastructure/adapters/delete-user.adapter';
import { User } from '../../domain/entities/user.entity';
import { CreateUserDto } from '../../application/dto/create-user.dto';
import { UpdateUserDto } from '../../application/dto/update-user.dto';
import { GetAllUsersAdapter } from '../../infrastructure/adapters/get-all-user.adapter';
import { GetUserByEmailAdapter } from 'src/users/infrastructure/adapters/get-user-by-email.adapter';


@Injectable()
export class UsersService {
  constructor(
    private readonly createUserAdapter: CreateUserAdapter,
    private readonly getUserAdapter: GetUserAdapter,
    private readonly updateUserAdapter: UpdateUserAdapter,
    private readonly deleteUserAdapter: DeleteUserAdapter,
    private readonly getAllUsersAdapter: GetAllUsersAdapter,
    private readonly getUserByEmailAdapter: GetUserByEmailAdapter
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.createUserAdapter.createUser(createUserDto);
  }

  async getUser(userId: string): Promise<User | null> {
    return this.getUserAdapter.getUser(userId);
  }

  async getAllUsers(): Promise<User[]> {
    return this.getAllUsersAdapter.getAllUsers();
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.getUserByEmailAdapter.getUserByEmail(email);
  }

  async updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    return this.updateUserAdapter.updateUser(userId, updateUserDto);
  }

  async deleteUser(userId: string): Promise<boolean> {
    return this.deleteUserAdapter.deleteUser(userId);
  }
}