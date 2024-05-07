import { CreateClientDto } from '../../application/dto/create-client.dto';
import { Client } from '../entities/client.entity';
export interface CreateClientPort {
    createClient(createClientDto: CreateClientDto): Promise<Client>;
}
