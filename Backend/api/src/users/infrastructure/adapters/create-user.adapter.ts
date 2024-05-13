import { CreateUserPort } from '../../domain/ports/create-user.port';
import { User } from '../../domain/entities/user.entity';
import { CreateUserDto } from '../../application/dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import ImageUploader from '../../domain/ports/image-uploader.port';
import * as path from 'path';

@Injectable()
export class CreateUserAdapter implements CreateUserPort {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private readonly imageUploader: ImageUploader
  ) { }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    // Crea una nueva instancia de User a partir de los datos del DTO
    const newUser = new User();
    newUser.name = createUserDto.name;
    newUser.email = createUserDto.email;

    // Encripta la contraseña antes de guardarla
    const salt = await bcrypt.genSalt();
    newUser.password = await bcrypt.hash(createUserDto.password, salt);

    // Asigna la URL de la imagen por defecto a la propiedad photoUrl del usuario
  newUser.photoUrl = "http://res.cloudinary.com/dqwqulk5l/image/upload/v1715173814/g355zdao69izocaytd7f.svg";

    // Guarda el nuevo usuario en la base de datos y devuelve el resultado
    return this.userRepository.save(newUser);
  }
}