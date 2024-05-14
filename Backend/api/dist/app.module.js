"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./users/domain/entities/user.entity");
const users_module_1 = require("./users/application/users.module");
const client_entity_1 = require("./clients/domain/entities/client.entity");
const clients_module_1 = require("./clients/application/clients.module");
const project_entity_1 = require("./projects/domain/entities/project.entity");
const projects_module_1 = require("./projects/projects.module");
const auth_module_1 = require("./auth/auth.module");
const task_entity_1 = require("./tasks/domain/entities/task.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'user',
                password: 'password',
                database: 'postgres',
                entities: [user_entity_1.User, client_entity_1.Client, project_entity_1.Project, task_entity_1.Task],
                synchronize: true,
            }),
            users_module_1.UsersModule,
            clients_module_1.ClientsModule,
            projects_module_1.ProjectsModule,
            auth_module_1.AuthModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map