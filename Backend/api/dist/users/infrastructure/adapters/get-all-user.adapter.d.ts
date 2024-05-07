import { User } from "src/users/domain/entities/user.entity";
import { GetAllUsersPort } from "src/users/domain/ports/get-all-user.port";
import { Repository } from "typeorm";
export declare class GetAllUsersAdapter implements GetAllUsersPort {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getAllUsers(): Promise<User[]>;
}
