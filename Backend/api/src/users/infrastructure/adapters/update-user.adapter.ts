import { UpdateUserPort } from '../../domain/ports/update-user.port';
import { UpdateUserDto } from '../../application/dto/update-user.dto';
import { User } from '../../domain/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';


@Injectable()
export class UpdateUserAdapter implements UpdateUserPort {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) return null;

    // Asigna cada propiedad del updateUserDto al usuario
    for (const prop in updateUserDto) {
      if (updateUserDto.hasOwnProperty(prop) && user.hasOwnProperty(prop)) {
        user[prop] = updateUserDto[prop];
      }
    }

    return this.userRepository.save(user);
  }
}
