import { Client } from "src/clients/domain/entities/client.entity";
import { GetClientPort } from "src/clients/domain/ports/get-client.port";
import { Repository } from "typeorm";
export declare class GetClientAdapter implements GetClientPort {
    private clientRepository;
    constructor(clientRepository: Repository<Client>);
    getClient(id: string): Promise<Client>;
}
