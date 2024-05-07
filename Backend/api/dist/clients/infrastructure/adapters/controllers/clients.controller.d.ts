import { CreateClientDto } from '../../../application/dto/create-client.dto';
import { UpdateClientDto } from '../../../application/dto/update-client.dto';
import { ClientsService } from '../../../application/services/clients.service';
export declare class ClientsController {
    private readonly clientsService;
    constructor(clientsService: ClientsService);
    create(createClientDto: CreateClientDto): Promise<import("../../../domain/entities/client.entity").Client>;
    findOne(id: string): Promise<import("../../../domain/entities/client.entity").Client>;
    findAll(): Promise<import("../../../domain/entities/client.entity").Client[]>;
    update(id: string, updateClientDto: UpdateClientDto): Promise<import("../../../domain/entities/client.entity").Client>;
    patch(id: string, updateClientDto: UpdateClientDto): Promise<import("../../../domain/entities/client.entity").Client>;
    remove(id: string): Promise<void>;
}
