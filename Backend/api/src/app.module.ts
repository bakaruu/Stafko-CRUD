//modulo raiz de la aplicacion que importa los modulos de tareas
//y usuarios etc

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/entities/task.entity';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TasksModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'postgres',
      entities: [User, Task],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Task]),
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}



