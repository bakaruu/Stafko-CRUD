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
exports.GetTaskToProjectAdapter = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const project_entity_1 = require("../../../projects/domain/entities/project.entity");
const task_entity_1 = require("../../domain/entities/task.entity");
let GetTaskToProjectAdapter = class GetTaskToProjectAdapter {
    constructor(projectRepository, taskRepository) {
        this.projectRepository = projectRepository;
        this.taskRepository = taskRepository;
    }
    getTasksToProject(projectId) {
        throw new Error('Method not implemented.');
    }
    async getTasks(projectId) {
        const project = await this.projectRepository.findOne({
            where: { id: projectId },
            relations: ['tasks']
        });
        if (!project) {
            throw new common_1.NotFoundException(`Project with id ${projectId} not found`);
        }
        return project.tasks;
    }
};
exports.GetTaskToProjectAdapter = GetTaskToProjectAdapter;
exports.GetTaskToProjectAdapter = GetTaskToProjectAdapter = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_entity_1.Project)),
    __param(1, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], GetTaskToProjectAdapter);
//# sourceMappingURL=get-task.adapter.js.map