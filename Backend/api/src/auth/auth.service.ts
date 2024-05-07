import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/application/services/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    // Aquí es donde verificarías las credenciales del usuario.
   const user = await this.usersService.getUser(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}