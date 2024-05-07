class UserRepository {
    constructor(dbConnection) {
        this.dbConnection = dbConnection;
    }
    async createUser(user) {
        const result = await this.dbConnection.query('INSERT INTO users SET ?', user);
        user.id = result.insertId;
        return user;
    }
    async deleteUser(id) {
        await this.dbConnection.query('DELETE FROM users WHERE id = ?', [id]);
    }
    async getAllUsers() {
        const users = await this.dbConnection.query('SELECT * FROM users');
        return users;
    }
    async getUserById(id) {
        const users = await this.dbConnection.query('SELECT * FROM users WHERE id = ?', [id]);
        return users[0];
    }
    async updateUser(id, updateUserDto) {
        await this.dbConnection.query('UPDATE users SET ? WHERE id = ?', [updateUserDto, id]);
        return this.getUserById(id);
    }
}
//# sourceMappingURL=user.repository.js.map