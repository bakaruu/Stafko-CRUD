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
exports.CreateTaskAdapter = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const task_entity_1 = require("../../domain/entities/task.entity");
const project_entity_1 = require("../../../projects/domain/entities/project.entity");
let CreateTaskAdapter = class CreateTaskAdapter {
    constructor(taskRepository, projectRepository) {
        this.taskRepository = taskRepository;
        this.projectRepository = projectRepository;
    }
    async createTask(createTaskDto) {
        const project = await this.projectRepository.findOne({ where: { id: createTaskDto.projectId } });
        if (!project) {
            throw new common_1.NotFoundException(`Project with id ${createTaskDto.projectId} not found`);
        }
        const task = new task_entity_1.Task();
        task.name = createTaskDto.name;
        task.type = task_entity_1.TaskType[createTaskDto.type];
        task.status = task_entity_1.TaskStatus[createTaskDto.status];
        task.startTime = createTaskDto.startTime;
        task.endTime = createTaskDto.endTime;
        task.assignedTo = createTaskDto.assignedTo;
        task.project = project;
        return this.taskRepository.save(task);
    }
};
exports.CreateTaskAdapter = CreateTaskAdapter;
exports.CreateTaskAdapter = CreateTaskAdapter = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __param(1, (0, typeorm_1.InjectRepository)(project_entity_1.Project)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CreateTaskAdapter);
//# sourceMappingURL=create-task.adapter.js.map