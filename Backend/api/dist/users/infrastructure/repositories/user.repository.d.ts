declare class UserRepository {
    private dbConnection;
    constructor(dbConnection: any);
    createUser(user: any): Promise<any>;
    deleteUser(id: any): Promise<void>;
    getAllUsers(): Promise<any>;
    getUserById(id: any): Promise<any>;
    updateUser(id: any, updateUserDto: any): Promise<any>;
}
