import { UpdateClientDto } from '../../application/dto/update-client.dto';
import { Client } from '../entities/client.entity';

export interface UpdateClientPort {
  updateClient(id: string, updateClientDto: UpdateClientDto): Promise<Client>;
}