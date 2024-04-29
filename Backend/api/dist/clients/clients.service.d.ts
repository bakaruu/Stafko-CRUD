import { Repository } from "typeorm";
import { CreateClientDto } from "./dto/create-client.dto";
import { UpdateClientDto } from "./dto/update-client.dto";
import { Client } from "./entities/client.entity";
export declare class ClientsService {
    private clientsRepository;
    constructor(clientsRepository: Repository<Client>);
    create(createClientDto: CreateClientDto): Promise<Client>;
    findAll(): Promise<Client[]>;
    findOne(id: string): Promise<Client>;
    findOneByEmail(contactEmail: string): Promise<Client>;
    findOneByName(name: string): Promise<Client>;
    update(id: string, updateClientDto: UpdateClientDto): Promise<Client>;
    remove(id: string): Promise<void>;
}
