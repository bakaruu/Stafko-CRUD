import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from '../application/services/users.service';
import { CreateUserAdapter } from './../infrastructure/adapters/create-user.adapter';
import { GetUserAdapter } from './../infrastructure/adapters/get-user.adapter';
import { UpdateUserAdapter } from './../infrastructure/adapters/update-user.adapter';
import { DeleteUserAdapter } from './../infrastructure/adapters/delete-user.adapter';
import { User } from './../domain/entities/user.entity';
import { UsersController } from '../infrastructure/adapters/controllers/user.controller';
import { GetAllUsersAdapter } from '../infrastructure/adapters/get-all-user.adapter';
import { GetUserByEmailAdapter } from '../infrastructure/adapters/get-user-by-email.adapter';
import ImageUploader from '../domain/ports/image-uploader.port';
import CloudinaryImageUploader from '../infrastructure/adapters/cloudinary-image-uploader.adapter';


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    UsersService,
    CreateUserAdapter,
    GetUserAdapter,
    UpdateUserAdapter,
    DeleteUserAdapter,
    GetAllUsersAdapter,
    GetUserByEmailAdapter,
    {
      provide: ImageUploader,
      useClass: CloudinaryImageUploader,
    },
  ],
})
export class UsersModule {}
