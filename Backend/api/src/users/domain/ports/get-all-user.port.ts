// get-all-users.port.ts

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/users/domain/entities/user.entity";
import { Repository } from "typeorm";

export interface GetAllUsersPort {
    getAllUsers(): Promise<User[]>;
  }