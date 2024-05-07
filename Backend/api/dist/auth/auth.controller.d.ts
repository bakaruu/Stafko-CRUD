import { UsersService } from '../users/application/services/users.service';
export declare class AuthController {
    private readonly usersService;
    constructor(usersService: UsersService);
    login(loginUserDto: any): Promise<{
        message: string;
    }>;
}
