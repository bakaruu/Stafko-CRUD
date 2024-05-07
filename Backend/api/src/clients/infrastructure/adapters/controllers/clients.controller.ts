// clients.controller.ts
import { Controller, Post, Get, Patch, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateClientDto } from '../../../application/dto/create-client.dto';
import { UpdateClientDto } from '../../../application/dto/update-client.dto';
import { ClientsService } from '../../../application/services/clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.createClient(createClientDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientsService.getClient(id);
  }

  @Get()
  findAll() {
    return this.clientsService.getAllClients();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.updateClient(id, updateClientDto);
  }

  @Patch(':id')
  patch(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.updateClient(id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientsService.deleteClient(id);
  }
}