"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const client_entity_1 = require("../domain/entities/client.entity");
const create_client_adapter_1 = require("../infrastructure/adapters/create-client.adapter");
const clients_controller_1 = require("../infrastructure/adapters/controllers/clients.controller");
const clients_service_1 = require("../application/services/clients.service");
const delete_client_adapter_1 = require("../infrastructure/adapters/delete-client.adapter");
const get_all_client_adapter_1 = require("../infrastructure/adapters/get-all-client.adapter");
const get_client_adapter_1 = require("../infrastructure/adapters/get-client.adapter");
const update_client_adapter_1 = require("../infrastructure/adapters/update-client.adapter");
let ClientsModule = class ClientsModule {
};
exports.ClientsModule = ClientsModule;
exports.ClientsModule = ClientsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([client_entity_1.Client])],
        controllers: [clients_controller_1.ClientsController],
        providers: [
            clients_service_1.ClientsService,
            create_client_adapter_1.CreateClientAdapter,
            get_client_adapter_1.GetClientAdapter,
            get_all_client_adapter_1.GetAllClientsAdapter,
            update_client_adapter_1.UpdateClientAdapter,
            delete_client_adapter_1.DeleteClientAdapter,
        ],
        exports: []
    })
], ClientsModule);
//# sourceMappingURL=clients.module.js.map