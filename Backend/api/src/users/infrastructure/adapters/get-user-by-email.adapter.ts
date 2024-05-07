// get-user-by-email.adapter.ts
import { GetUserByEmailPort } from '../../domain/ports/get-user-by-email.port';
import { User } from '../../domain/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetUserByEmailAdapter implements GetUserByEmailPort {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async getUserByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } });
  }
}