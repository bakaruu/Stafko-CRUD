import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateClientDto } from "./dto/create-client.dto";
import { UpdateClientDto } from "./dto/update-client.dto";
import { Client } from "./entities/client.entity";

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private clientsRepository: Repository<Client>
  ) {}

  async create(createClientDto: CreateClientDto): Promise<Client> {
    const existingClient = await this.clientsRepository.findOne({ 
        where: [
            { contactEmail: createClientDto.contactEmail },
            { name: createClientDto.name }
        ]
    });

    if (existingClient) {
        throw new HttpException('Client with this email or name already exists', HttpStatus.BAD_REQUEST);
    }

    const client = this.clientsRepository.create(createClientDto);
    await this.clientsRepository.save(client);
    return client;
  }

  findAll(): Promise<Client[]> {
    return this.clientsRepository.find();
  }

  findOne(id: string): Promise<Client> {
    return this.clientsRepository.findOne({ where: { id: id } });
  }

  // Find one client by email
  findOneByEmail(contactEmail: string): Promise<Client> {
    return this.clientsRepository.findOne({ where: { contactEmail: contactEmail } });
  }

  //Find one client by name
  findOneByName(name: string): Promise<Client> {
    return this.clientsRepository.findOne({ where: { name: name } });
  }

  async update(id: string, updateClientDto: UpdateClientDto): Promise<Client> {
    const client = await this.clientsRepository.preload({
      id: id,
      ...updateClientDto,
    });
    if (!client) {
      throw new Error(`Client ${id} not found`);
    }
    return await this.clientsRepository.save(client);
  }

  async remove(id: string): Promise<void> {
    await this.clientsRepository.delete(id);
  }
}