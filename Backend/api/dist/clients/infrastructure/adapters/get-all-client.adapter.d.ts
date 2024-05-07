import { Client } from "src/clients/domain/entities/client.entity";
import { GetAllClientsPort } from "src/clients/domain/ports/get-all-client.port";
import { Repository } from "typeorm";
export declare class GetAllClientsAdapter implements GetAllClientsPort {
    private clientRepository;
    constructor(clientRepository: Repository<Client>);
    getAllClients(): Promise<Client[]>;
}
