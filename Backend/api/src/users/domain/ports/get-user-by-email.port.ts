import { User } from "../entities/user.entity";

// get-user-by-email.port.ts
export interface GetUserByEmailPort {
    getUserByEmail(email: string): Promise<User | null>;
  }