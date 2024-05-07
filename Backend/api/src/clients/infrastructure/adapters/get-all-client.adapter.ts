import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Client } from "src/clients/domain/entities/client.entity";
import { GetAllClientsPort } from "src/clients/domain/ports/get-all-client.port";
import { Repository } from "typeorm";

@Injectable()
export class GetAllClientsAdapter implements GetAllClientsPort {
  constructor(@InjectRepository(Client) private clientRepository: Repository<Client>) {}

  async getAllClients(): Promise<Client[]> {
    return this.clientRepository.find();
  }
}