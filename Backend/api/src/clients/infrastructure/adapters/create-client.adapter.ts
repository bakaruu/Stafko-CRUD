// create-client.adapter.ts
import { CreateClientPort } from '../../domain/ports/create-client.port';
import { Client } from '../../domain/entities/client.entity';
import { CreateClientDto } from '../../application/dto/create-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateClientAdapter implements CreateClientPort {
  constructor(@InjectRepository(Client) private clientRepository: Repository<Client>) {}

  async createClient(createClientDto: CreateClientDto): Promise<Client> {
    const newClient = new Client();
    newClient.clientName = createClientDto.clientName;
    newClient.contactName = createClientDto.contactName;
    newClient.email = createClientDto.email;
    newClient.phone = createClientDto.phone;

    return this.clientRepository.save(newClient);
  }
}

