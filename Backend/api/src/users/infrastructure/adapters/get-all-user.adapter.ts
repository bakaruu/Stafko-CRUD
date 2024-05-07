
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/users/domain/entities/user.entity";
import { GetAllUsersPort } from "src/users/domain/ports/get-all-user.port";
import { Repository } from "typeorm";


  // get-all-users.adapter.ts
  
  @Injectable()
  export class GetAllUsersAdapter implements GetAllUsersPort {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}
  
    async getAllUsers(): Promise<User[]> {
      return this.userRepository.find();
    }
  }