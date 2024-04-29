//modulo raiz de la aplicacion que importa los modulos de tareas
//y usuarios etc

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/entities/task.entity';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { ProjectsModule } from './projects/projects.module';
import { ClientsModule } from './clients/clients.module';
import { Client } from './clients/entities/client.entity';

@Module({
  imports: [
    TasksModule,
    UsersModule,
    ClientsModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',//db for production, localhost for development
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'postgres',
      entities: [User, Task, Client],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Task, Client]),
    ProjectsModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}



