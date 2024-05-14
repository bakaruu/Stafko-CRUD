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
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const project_entity_1 = require("../../../projects/domain/entities/project.entity");
const tasks_entity_1 = require("../../domain/entities/tasks.entity");
let TasksService = class TasksService {
    constructor(projectRepository, taskRepository) {
        this.projectRepository = projectRepository;
        this.taskRepository = taskRepository;
    }
    async addTasksToProject(projectId, taskIds) {
        const project = await this.projectRepository.findOne({
            where: { id: projectId },
            relations: ['tasks']
        });
        if (!project) {
            throw new common_1.NotFoundException(`Project with id ${projectId} not found`);
        }
        const tasks = await this.taskRepository.findByIds(taskIds);
        if (tasks.length !== taskIds.length) {
            throw new common_1.NotFoundException('One or more tasks not found');
        }
        project.tasks.push(...tasks);
        await this.projectRepository.save(project);
        return project;
    }
    async deleteTaskFromProject(projectId, taskId) {
        const project = await this.projectRepository.findOne({
            where: { id: projectId },
            relations: ['tasks']
        });
        if (!project) {
            throw new common_1.NotFoundException(`Project with id ${projectId} not found`);
        }
        project.tasks = project.tasks.filter(task => task.id !== taskId);
        await this.projectRepository.save(project);
    }
    async updateTaskInProject(projectId, taskId, updateTaskDto) {
        const project = await this.projectRepository.findOne({
            where: { id: projectId },
            relations: ['tasks']
        });
        if (!project) {
            throw new common_1.NotFoundException(`Project with id ${projectId} not found`);
        }
        const task = project.tasks.find(task => task.id === taskId);
        if (!task) {
            throw new common_1.NotFoundException(`Task with id ${taskId} not found in project`);
        }
        const updatedTask = this.taskRepository.merge(task, updateTaskDto);
        return this.taskRepository.save(updatedTask);
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_entity_1.Project)),
    __param(1, (0, typeorm_1.InjectRepository)(tasks_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TasksService);
//# sourceMappingURL=tasks.service.js.map