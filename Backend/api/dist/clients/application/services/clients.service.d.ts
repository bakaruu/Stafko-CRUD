import { CreateClientAdapter } from '../../infrastructure/adapters/create-client.adapter';
import { GetClientAdapter } from '../../infrastructure/adapters/get-client.adapter';
import { GetAllClientsAdapter } from '../../infrastructure/adapters/get-all-client.adapter';
import { UpdateClientAdapter } from '../../infrastructure/adapters/update-client.adapter';
import { DeleteClientAdapter } from '../../infrastructure/adapters/delete-client.adapter';
import { Client } from '../../domain/entities/client.entity';
import { CreateClientDto } from '../../application/dto/create-client.dto';
import { UpdateClientDto } from '../../application/dto/update-client.dto';
export declare class ClientsService {
    private readonly createClientAdapter;
    private readonly getClientAdapter;
    private readonly getAllClientsAdapter;
    private readonly updateClientAdapter;
    private readonly deleteClientAdapter;
    constructor(createClientAdapter: CreateClientAdapter, getClientAdapter: GetClientAdapter, getAllClientsAdapter: GetAllClientsAdapter, updateClientAdapter: UpdateClientAdapter, deleteClientAdapter: DeleteClientAdapter);
    createClient(createClientDto: CreateClientDto): Promise<Client>;
    getClient(id: string): Promise<Client>;
    getAllClients(): Promise<Client[]>;
    updateClient(id: string, updateClientDto: UpdateClientDto): Promise<Client>;
    deleteClient(id: string): Promise<void>;
}
