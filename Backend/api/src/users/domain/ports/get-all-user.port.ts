// get-all-users.port.ts
import { User } from "src/users/domain/entities/user.entity";


export interface GetAllUsersPort {
    getAllUsers(): Promise<User[]>;
  }