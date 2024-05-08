import { CreateUserPort } from '../../domain/ports/create-user.port';
import { User } from '../../domain/entities/user.entity';
import { CreateUserDto } from '../../application/dto/create-user.dto';
import { Repository } from 'typeorm';
import ImageUploader from '../../domain/ports/image-uploader.port';
export declare class CreateUserAdapter implements CreateUserPort {
    private userRepository;
    private readonly imageUploader;
    constructor(userRepository: Repository<User>, imageUploader: ImageUploader);
    createUser(createUserDto: CreateUserDto): Promise<User>;
}
