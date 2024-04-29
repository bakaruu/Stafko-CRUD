"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const client_entity_1 = require("./entities/client.entity");
let ClientsService = class ClientsService {
    constructor(clientsRepository) {
        this.clientsRepository = clientsRepository;
    }
    async create(createClientDto) {
        const newClient = this.clientsRepository.create(createClientDto);
        return this.clientsRepository.save(newClient);
    }
    async findAll() {
        return this.clientsRepository.find();
    }
    async findOne(id) {
        return this.clientsRepository.findOne({ where: { id: id } });
    }
    findOneByEmail(email) {
        return this.clientsRepository.findOne({ where: { email: email } });
    }
    async update(id, updateClientDto) {
        const clientToUpdate = await this.clientsRepository.preload({
            id: id,
            ...updateClientDto,
        });
        if (!clientToUpdate) {
            throw new Error(`Client #${id} not found`);
        }
        return this.clientsRepository.save(clientToUpdate);
    }
    async remove(id) {
        const clientToRemove = await this.findOne(id);
        await this.clientsRepository.remove(clientToRemove);
    }
};
exports.ClientsService = ClientsService;
exports.ClientsService = ClientsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(client_entity_1.Client)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ClientsService);
//# sourceMappingURL=clients.service.js.map