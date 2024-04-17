import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.usersRepository.findOne({ 
        where: [
            { email: createUserDto.email },
            { name: createUserDto.name }
        ]
    });

    if (existingUser) {
        throw new HttpException('User with this email or name already exists', HttpStatus.BAD_REQUEST);
    }

    const user = this.usersRepository.create(createUserDto);
    await this.usersRepository.save(user);
    return user;
}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

    findOne(id: string): Promise<User> {
      return this.usersRepository.findOne({ where: { id: id } });
  }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
      const user = await this.usersRepository.preload({
        id: id,
        ...updateUserDto,
      });
      if (!user) {
        throw new Error(`User ${id} not found`);
      }
      return await this.usersRepository.save(user);
    }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
