"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsModule = void 0;
const common_1 = require("@nestjs/common");
const project_controller_1 = require("./infrastructure/controllers/project.controller");
const projects_service_1 = require("./application/services/projects.service");
const typeorm_1 = require("@nestjs/typeorm");
const project_entity_1 = require("./domain/entities/project.entity");
const create_project_adapter_1 = require("./infrastructure/adapters/create-project.adapter");
const delete_project_adapter_1 = require("./infrastructure/adapters/delete-project.adapter");
const get_project_adapter_1 = require("./infrastructure/adapters/get-project.adapter");
const update_project_adapter_1 = require("./infrastructure/adapters/update-project.adapter");
const get_all_project_adapter_1 = require("./infrastructure/adapters/get-all-project.adapter");
const add_users_to_project_adapter_1 = require("./infrastructure/adapters/add-users-to-project.adapter");
const users_module_1 = require("../users/application/users.module");
const client_entity_1 = require("../clients/domain/entities/client.entity");
let ProjectsModule = class ProjectsModule {
};
exports.ProjectsModule = ProjectsModule;
exports.ProjectsModule = ProjectsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([project_entity_1.Project, client_entity_1.Client]), users_module_1.UsersModule],
        controllers: [project_controller_1.ProjectController],
        providers: [
            projects_service_1.ProjectsService,
            create_project_adapter_1.CreateProjectAdapter,
            get_project_adapter_1.GetProjectAdapter,
            update_project_adapter_1.UpdateProjectAdapter,
            delete_project_adapter_1.DeleteProjectAdapter,
            get_all_project_adapter_1.GetAllProjectsAdapter,
            {
                provide: 'AddUsersToProjectPort',
                useClass: add_users_to_project_adapter_1.AddUsersToProjectAdapter,
            },
        ],
    })
], ProjectsModule);
//# sourceMappingURL=projects.module.js.map