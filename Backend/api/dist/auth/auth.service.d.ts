import { UsersService } from '../users/application/services/users.service';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    validateUser(username: string, pass: string): Promise<any>;
}
