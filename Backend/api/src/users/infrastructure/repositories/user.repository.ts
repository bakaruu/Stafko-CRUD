//en el caso de que no utilicemos un ORM tendremos que 
//insertar nosotros mismos

class UserRepository {
    constructor(private dbConnection) {}
  
    async createUser(user) {
      // Inserta el usuario en la base de datos
      const result = await this.dbConnection.query('INSERT INTO users SET ?', user);
      user.id = result.insertId;
      return user;
    }
  
    async deleteUser(id) {
      // Elimina el usuario de la base de datos
      await this.dbConnection.query('DELETE FROM users WHERE id = ?', [id]);
    }
  
    async getAllUsers() {
      // Obtiene todos los usuarios de la base de datos
      const users = await this.dbConnection.query('SELECT * FROM users');
      return users;
    }
  
    async getUserById(id) {
      // Obtiene un usuario de la base de datos por su ID
      const users = await this.dbConnection.query('SELECT * FROM users WHERE id = ?', [id]);
      return users[0];
    }
  
    async updateUser(id, updateUserDto) {
      // Actualiza un usuario en la base de datos
      await this.dbConnection.query('UPDATE users SET ? WHERE id = ?', [updateUserDto, id]);
      return this.getUserById(id);
    }
  }