import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Client } from "src/clients/domain/entities/client.entity";
import { DeleteClientPort } from "src/clients/domain/ports/delete-client.port";
import { Repository } from "typeorm";

@Injectable()
export class DeleteClientAdapter implements DeleteClientPort {
  constructor(@InjectRepository(Client) private clientRepository: Repository<Client>) {}

  async deleteClient(id: string): Promise<void> {
    await this.clientRepository.delete(id);
  }
}