import { UsersService } from '../users/users.service';
export declare class AuthController {
    private readonly usersService;
    constructor(usersService: UsersService);
    login(loginUserDto: any): Promise<{
        message: string;
    }>;
}
