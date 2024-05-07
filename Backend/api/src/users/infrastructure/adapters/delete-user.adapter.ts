import { DeleteUserPort } from '../../domain/ports/delete-user.port';
import { User } from '../../domain/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';


@Injectable()
export class DeleteUserAdapter implements DeleteUserPort {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async deleteUser(userId: string): Promise<boolean> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) return false;

    await this.userRepository.remove(user);
    return true;
  }
}
