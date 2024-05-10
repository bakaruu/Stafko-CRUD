"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_service_1 = require("../application/services/users.service");
const create_user_adapter_1 = require("./../infrastructure/adapters/create-user.adapter");
const get_user_adapter_1 = require("./../infrastructure/adapters/get-user.adapter");
const update_user_adapter_1 = require("./../infrastructure/adapters/update-user.adapter");
const delete_user_adapter_1 = require("./../infrastructure/adapters/delete-user.adapter");
const user_entity_1 = require("./../domain/entities/user.entity");
const user_controller_1 = require("../infrastructure/adapters/controllers/user.controller");
const get_all_user_adapter_1 = require("../infrastructure/adapters/get-all-user.adapter");
const get_user_by_email_adapter_1 = require("../infrastructure/adapters/get-user-by-email.adapter");
const image_uploader_port_1 = require("../domain/ports/image-uploader.port");
const cloudinary_image_uploader_adapter_1 = require("../infrastructure/adapters/cloudinary-image-uploader.adapter");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])],
        exports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])],
        controllers: [user_controller_1.UsersController],
        providers: [
            users_service_1.UsersService,
            create_user_adapter_1.CreateUserAdapter,
            get_user_adapter_1.GetUserAdapter,
            update_user_adapter_1.UpdateUserAdapter,
            delete_user_adapter_1.DeleteUserAdapter,
            get_all_user_adapter_1.GetAllUsersAdapter,
            get_user_by_email_adapter_1.GetUserByEmailAdapter,
            {
                provide: image_uploader_port_1.default,
                useClass: cloudinary_image_uploader_adapter_1.default,
            },
        ],
    })
], UsersModule);
//# sourceMappingURL=users.module.js.map