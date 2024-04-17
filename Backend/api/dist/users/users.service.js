"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    constructor() {
        this.users = [];
    }
    create(createUserDto) {
        const users = {
            id: (0, uuid_1.v4)(),
            name: createUserDto.name,
            email: createUserDto.email,
            password: createUserDto.password,
            role: user_entity_1.UserRole.USER,
            created_at: new Date(),
            updated_at: new Date()
        };
        this.users.push(users);
        return users;
    }
    findAll() {
        return this.users;
    }
    findOne(id) {
        return this.users.find(user => user.id === id);
    }
    update(id, updateUserDto) {
        const user = this.findOne(id);
        if (!user) {
            return null;
        }
        const newUser = Object.assign(user, updateUserDto);
        this.users = this.users.map(user => user.id === id ?
            newUser : user);
        return newUser;
    }
    remove(id) {
        this.users = this.users.filter(user => user.id !== id);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map