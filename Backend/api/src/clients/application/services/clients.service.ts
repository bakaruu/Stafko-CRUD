// clients.service.ts
import { Injectable } from '@nestjs/common';
import { CreateClientAdapter } from '../../infrastructure/adapters/create-client.adapter';
import { GetClientAdapter } from '../../infrastructure/adapters/get-client.adapter';
import { GetAllClientsAdapter } from '../../infrastructure/adapters/get-all-client.adapter';
import { UpdateClientAdapter } from '../../infrastructure/adapters/update-client.adapter';
import { DeleteClientAdapter } from '../../infrastructure/adapters/delete-client.adapter';
import { Client } from '../../domain/entities/client.entity';
import { CreateClientDto } from '../../application/dto/create-client.dto';
import { UpdateClientDto } from '../../application/dto/update-client.dto';

@Injectable()
export class ClientsService {
  constructor(
    private readonly createClientAdapter: CreateClientAdapter,
    private readonly getClientAdapter: GetClientAdapter,
    private readonly getAllClientsAdapter: GetAllClientsAdapter,
    private readonly updateClientAdapter: UpdateClientAdapter,
    private readonly deleteClientAdapter: DeleteClientAdapter
  ) {}

  async createClient(createClientDto: CreateClientDto): Promise<Client> {
    return this.createClientAdapter.createClient(createClientDto);
  }

  async getClient(id: string): Promise<Client> {
    return this.getClientAdapter.getClient(id);
  }

  async getAllClients(): Promise<Client[]> {
    return this.getAllClientsAdapter.getAllClients();
  }

  async updateClient(id: string, updateClientDto: UpdateClientDto): Promise<Client> {
    return this.updateClientAdapter.updateClient(id, updateClientDto);
  }

  async deleteClient(id: string): Promise<void> {
    return this.deleteClientAdapter.deleteClient(id);
  }
}