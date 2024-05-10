import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/domain/entities/user.entity';
import { GetUserByEmailAdapter } from 'src/users/infrastructure/adapters/get-user-by-email.adapter'; // Importa GetUserByEmailAdapter aquí
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService, GetUserByEmailAdapter], // Agrega GetUserByEmailAdapter aquí
})
export class AuthModule {}