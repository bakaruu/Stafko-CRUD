"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const task_entity_1 = require("./domain/entities/task.entity");
const tasks_service_1 = require("./application/services/tasks.service");
const task_controller_1 = require("./infrastructure/controllers/task.controller");
const create_task_adapter_1 = require("./infrastructure/adapters/create-task.adapter");
const delete_task_adapter_1 = require("./infrastructure/adapters/delete-task.adapter");
const get_task_adapter_1 = require("./infrastructure/adapters/get-task.adapter");
const update_task_adapter_1 = require("./infrastructure/adapters/update-task.adapter");
const get_all_task_adapter_1 = require("./infrastructure/adapters/get-all-task.adapter");
const projects_module_1 = require("../projects/projects.module");
const project_entity_1 = require("../projects/domain/entities/project.entity");
let TaskModule = class TaskModule {
};
exports.TaskModule = TaskModule;
exports.TaskModule = TaskModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([task_entity_1.Task, project_entity_1.Project]),
            projects_module_1.ProjectsModule
        ],
        controllers: [task_controller_1.TaskController],
        providers: [
            tasks_service_1.TaskService,
            create_task_adapter_1.CreateTaskAdapter,
            delete_task_adapter_1.DeleteTaskAdapter,
            get_task_adapter_1.GetTaskAdapter,
            update_task_adapter_1.UpdateTaskAdapter,
            get_all_task_adapter_1.GetAllTaskAdapter,
        ],
    })
], TaskModule);
//# sourceMappingURL=tasks.module.js.map