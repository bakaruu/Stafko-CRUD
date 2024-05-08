import { AuthService } from '../auth/auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginUserDto: any): Promise<{
        message: string;
    }>;
}
