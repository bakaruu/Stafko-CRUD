import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private clientsRepository: Repository<Client>,
  ) {}

  async create(createClientDto: CreateClientDto): Promise<Client> {
    const newClient = this.clientsRepository.create(createClientDto);
    return this.clientsRepository.save(newClient);
  }

  async findAll(): Promise<Client[]> {
    return this.clientsRepository.find();
  }

  async findOne(id: string): Promise<Client> {
    return this.clientsRepository.findOne({ where: { id: id } });
  }

  // Find one user by email
  findOneByEmail(email: string): Promise<Client> {
    return this.clientsRepository.findOne({ where: { email: email } });
  }

  async update(id: string, updateClientDto: UpdateClientDto): Promise<Client> {
    const clientToUpdate = await this.clientsRepository.preload({
      id: id,
      ...updateClientDto,
    });
    if (!clientToUpdate) {
      throw new Error(`Client #${id} not found`);
    }
    return this.clientsRepository.save(clientToUpdate);
  }

  async remove(id: string): Promise<void> {
    const clientToRemove = await this.findOne(id);
    await this.clientsRepository.remove(clientToRemove);
  }
}