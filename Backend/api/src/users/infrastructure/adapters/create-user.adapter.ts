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

    // Sube la foto por defecto y guarda la URL en el usuario
    const defaultImagePath = path.resolve(process.cwd(), 'uploads', 'user-default.svg');
    const imageUrl = await this.imageUploader.upload(defaultImagePath); newUser.photoUrl = imageUrl;

    // Guarda el nuevo usuario en la base de datos y devuelve el resultado
    return this.userRepository.save(newUser);
  }
}