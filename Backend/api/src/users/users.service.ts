import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { v4 } from 'uuid';
import { User, UserRole } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users = [
    {
      id: v4(),
      name: "ADMIN",
      email: "admin@admin.com",
      password: "admin",
      role: UserRole.ADMIN,
      created_at: new Date(),
      updated_at: new Date()
    },

  ]

  create(createUserDto: CreateUserDto): User {
    const users: User = {
      id: v4(),
      name: createUserDto.name,
      email: createUserDto.email,
      password: createUserDto.password,
      role: UserRole.USER,
      created_at: new Date(),
      updated_at: new Date()
    };
    this.users.push(users);
    return users;

  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find(user => user.id === id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);
    if (!user) {
      return null;
    }
    const newUser = Object.assign(user, updateUserDto);
    this.users = this.users.map(user => user.id === id ? 
      newUser : user);

    return newUser;
  }

  remove(id: string) {
    this.users = this.users.filter(user => user.id !== id);
  }
}
