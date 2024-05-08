import { GetUserByEmailAdapter } from '../users/infrastructure/adapters/get-user-by-email.adapter';
export declare class AuthService {
    private userPort;
    constructor(userPort: GetUserByEmailAdapter);
    validateUser(email: string, pass: string): Promise<any>;
}
