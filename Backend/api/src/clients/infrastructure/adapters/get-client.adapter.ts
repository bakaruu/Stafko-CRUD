import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Client } from "src/clients/domain/entities/client.entity";
import { GetClientPort } from "src/clients/domain/ports/get-client.port";
import { Repository } from "typeorm";

// get-client.adapter.ts
@Injectable()
export class GetClientAdapter implements GetClientPort {
    constructor(@InjectRepository(Client) private clientRepository: Repository<Client>) {}

    async getClient(id: string): Promise<Client> {
        return this.clientRepository.findOne({ where: { id } });
    }
}
