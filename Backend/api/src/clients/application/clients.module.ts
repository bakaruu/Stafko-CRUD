import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Client } from "../domain/entities/client.entity";
import { CreateClientAdapter } from "../infrastructure/adapters/create-client.adapter";
import { ClientsController } from "../infrastructure/adapters/controllers/clients.controller";
import { ClientsService } from "../application/services/clients.service";
import { DeleteClientAdapter } from "../infrastructure/adapters/delete-client.adapter";
import { GetAllClientsAdapter } from "../infrastructure/adapters/get-all-client.adapter";
import { GetClientAdapter } from "../infrastructure/adapters/get-client.adapter";
import { UpdateClientAdapter } from "../infrastructure/adapters/update-client.adapter";

@Module({
    imports: [TypeOrmModule.forFeature([Client])],
    controllers: [ClientsController],
    providers: [
        ClientsService,
        CreateClientAdapter,
        GetClientAdapter,
        GetAllClientsAdapter,
        UpdateClientAdapter,
        DeleteClientAdapter,],
    exports: []



})

export class ClientsModule { }