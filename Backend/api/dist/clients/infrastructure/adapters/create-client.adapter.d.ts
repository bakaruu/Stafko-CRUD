import { CreateClientPort } from '../../domain/ports/create-client.port';
import { Client } from '../../domain/entities/client.entity';
import { CreateClientDto } from '../../application/dto/create-client.dto';
import { Repository } from 'typeorm';
export declare class CreateClientAdapter implements CreateClientPort {
    private clientRepository;
    constructor(clientRepository: Repository<Client>);
    createClient(createClientDto: CreateClientDto): Promise<Client>;
}
