// auth.service.ts
import { Injectable } from '@nestjs/common';
import { GetUserByEmailAdapter } from '../users/infrastructure/adapters/get-user-by-email.adapter';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private userPort: GetUserByEmailAdapter) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userPort.getUserByEmail(email);
    if (user) {
      const passwordMatch = await bcrypt.compare(pass, user.password);
      if (passwordMatch) {
        const { password, ...result } = user;
        return result;
      }
    }
    return null;
  }
}