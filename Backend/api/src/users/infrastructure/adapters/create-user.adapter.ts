import { CreateUserPort } from '../../domain/ports/create-user.port';
import { User } from '../../domain/entities/user.entity';
import { CreateUserDto } from '../../application/dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class CreateUserAdapter implements CreateUserPort {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    // Crea una nueva instancia de User a partir de los datos del DTO
    const newUser = new User();
    newUser.name = createUserDto.name;
    newUser.email = createUserDto.email;

    // Encripta la contraseña antes de guardarla
    const salt = await bcrypt.genSalt();
    newUser.password = await bcrypt.hash(createUserDto.password, salt);

    // Opcional: si hay más campos en el DTO, asigna los valores correspondientes

    // Guarda el nuevo usuario en la base de datos y devuelve el resultado
    return this.userRepository.save(newUser);
  }
}