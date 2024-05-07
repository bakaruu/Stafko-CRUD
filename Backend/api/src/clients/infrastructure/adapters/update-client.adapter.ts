import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UpdateClientDto } from "src/clients/application/dto/update-client.dto";
import { Client } from "src/clients/domain/entities/client.entity";
import { UpdateClientPort } from "src/clients/domain/ports/update-client.port";
import { Repository } from "typeorm";

@Injectable()
export class UpdateClientAdapter implements UpdateClientPort {
  constructor(@InjectRepository(Client) private clientRepository: Repository<Client>) {}

  async updateClient(id: string, updateClientDto: UpdateClientDto): Promise<Client> {
    await this.clientRepository.update(id, updateClientDto);
    return this.clientRepository.findOne({ where: { id } });
  }
}
