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
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const create_task_adapter_1 = require("../../infrastructure/adapters/create-task.adapter");
const delete_task_adapter_1 = require("../../infrastructure/adapters/delete-task.adapter");
const get_task_adapter_1 = require("../../infrastructure/adapters/get-task.adapter");
const update_task_adapter_1 = require("../../infrastructure/adapters/update-task.adapter");
const get_all_task_adapter_1 = require("../../infrastructure/adapters/get-all-task.adapter");
let TaskService = class TaskService {
    constructor(createTaskAdapter, deleteTaskAdapter, getTaskAdapter, updateTaskAdapter, getAllTaskAdapter) {
        this.createTaskAdapter = createTaskAdapter;
        this.deleteTaskAdapter = deleteTaskAdapter;
        this.getTaskAdapter = getTaskAdapter;
        this.updateTaskAdapter = updateTaskAdapter;
        this.getAllTaskAdapter = getAllTaskAdapter;
    }
    create(createTaskDto) {
        return this.createTaskAdapter.createTask(createTaskDto);
    }
    delete(id) {
        return this.deleteTaskAdapter.deleteTask(id);
    }
    findOne(id) {
        return this.getTaskAdapter.getTask(id);
    }
    findAll() {
        return this.getAllTaskAdapter.getAllTasks();
    }
    update(id, updateTaskDto) {
        return this.updateTaskAdapter.updateTask(id, updateTaskDto);
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [create_task_adapter_1.CreateTaskAdapter,
        delete_task_adapter_1.DeleteTaskAdapter,
        get_task_adapter_1.GetTaskAdapter,
        update_task_adapter_1.UpdateTaskAdapter,
        get_all_task_adapter_1.GetAllTaskAdapter])
], TaskService);
//# sourceMappingURL=tasks.service.js.map