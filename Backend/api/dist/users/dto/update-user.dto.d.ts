import { UserRole } from '../entities/user.entity';
export declare class UpdateUserDto {
    name: string;
    email: string;
    password: string;
    role: UserRole;
    photoUrl: string;
}
