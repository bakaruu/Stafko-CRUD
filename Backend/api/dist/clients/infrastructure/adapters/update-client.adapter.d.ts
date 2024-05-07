import { UpdateClientDto } from "src/clients/application/dto/update-client.dto";
import { Client } from "src/clients/domain/entities/client.entity";
import { UpdateClientPort } from "src/clients/domain/ports/update-client.port";
import { Repository } from "typeorm";
export declare class UpdateClientAdapter implements UpdateClientPort {
    private clientRepository;
    constructor(clientRepository: Repository<Client>);
    updateClient(id: string, updateClientDto: UpdateClientDto): Promise<Client>;
}
