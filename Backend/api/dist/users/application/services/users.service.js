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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const create_user_adapter_1 = require("../../infrastructure/adapters/create-user.adapter");
const get_user_adapter_1 = require("../../infrastructure/adapters/get-user.adapter");
const update_user_adapter_1 = require("../../infrastructure/adapters/update-user.adapter");
const delete_user_adapter_1 = require("../../infrastructure/adapters/delete-user.adapter");
const get_all_user_adapter_1 = require("../../infrastructure/adapters/get-all-user.adapter");
const get_user_by_email_adapter_1 = require("../../infrastructure/adapters/get-user-by-email.adapter");
let UsersService = class UsersService {
    constructor(createUserAdapter, getUserAdapter, updateUserAdapter, deleteUserAdapter, getAllUsersAdapter, getUserByEmailAdapter) {
        this.createUserAdapter = createUserAdapter;
        this.getUserAdapter = getUserAdapter;
        this.updateUserAdapter = updateUserAdapter;
        this.deleteUserAdapter = deleteUserAdapter;
        this.getAllUsersAdapter = getAllUsersAdapter;
        this.getUserByEmailAdapter = getUserByEmailAdapter;
    }
    async createUser(createUserDto) {
        return this.createUserAdapter.createUser(createUserDto);
    }
    async getUser(userId) {
        return this.getUserAdapter.getUser(userId);
    }
    async getAllUsers() {
        return this.getAllUsersAdapter.getAllUsers();
    }
    async getUserByEmail(email) {
        return this.getUserByEmailAdapter.getUserByEmail(email);
    }
    async updateUser(userId, updateUserDto) {
        return this.updateUserAdapter.updateUser(userId, updateUserDto);
    }
    async deleteUser(userId) {
        return this.deleteUserAdapter.deleteUser(userId);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [create_user_adapter_1.CreateUserAdapter,
        get_user_adapter_1.GetUserAdapter,
        update_user_adapter_1.UpdateUserAdapter,
        delete_user_adapter_1.DeleteUserAdapter,
        get_all_user_adapter_1.GetAllUsersAdapter,
        get_user_by_email_adapter_1.GetUserByEmailAdapter])
], UsersService);
//# sourceMappingURL=users.service.js.map