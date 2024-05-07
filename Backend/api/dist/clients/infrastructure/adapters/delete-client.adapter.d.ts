import { Client } from "src/clients/domain/entities/client.entity";
import { DeleteClientPort } from "src/clients/domain/ports/delete-client.port";
import { Repository } from "typeorm";
export declare class DeleteClientAdapter implements DeleteClientPort {
    private clientRepository;
    constructor(clientRepository: Repository<Client>);
    deleteClient(id: string): Promise<void>;
}
