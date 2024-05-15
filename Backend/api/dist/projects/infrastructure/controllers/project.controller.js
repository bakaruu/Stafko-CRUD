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
exports.ProjectController = void 0;
const common_1 = require("@nestjs/common");
const create_project_dto_1 = require("../../application/dto/create-project.dto");
const update_project_dto_1 = require("../../application/dto/update-project.dto");
const projects_service_1 = require("../../application/services/projects.service");
let ProjectController = class ProjectController {
    constructor(projectService, addUsersToProjectPort, addClientToProjectPort) {
        this.projectService = projectService;
        this.addUsersToProjectPort = addUsersToProjectPort;
        this.addClientToProjectPort = addClientToProjectPort;
    }
    async createProject(dto) {
        return this.projectService.createProject(dto, dto.userIds || []);
    }
    async addUsersToProject(id, userIds) {
        return this.addUsersToProjectPort.addUsersToProject(id, userIds);
    }
    async addClientToProject(id, clientId) {
        return this.addClientToProjectPort.addClientToProject(id, clientId);
    }
    async updateProject(id, dto) {
        return this.projectService.updateProject(id, dto);
    }
    async partialUpdateProject(id, dto) {
        return this.projectService.updatePartialProject(id, dto);
    }
    async getProject(id) {
        return this.projectService.getProject(id);
    }
    async getProjects() {
        return this.projectService.getProjects();
    }
    async deleteProject(id) {
        return this.projectService.deleteProject(id);
    }
    async removeUserFromProject(projectId, userId) {
        await this.projectService.removeUserFromProject(projectId, userId);
    }
    async removeClientFromProject(projectId) {
        await this.projectService.removeClientFromProject(projectId);
    }
};
exports.ProjectController = ProjectController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_project_dto_1.CreateProjectDto]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "createProject", null);
__decorate([
    (0, common_1.Post)(':id/users'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('users')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "addUsersToProject", null);
__decorate([
    (0, common_1.Post)(':id/client'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('client')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "addClientToProject", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_project_dto_1.UpdateProjectDto]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "updateProject", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_project_dto_1.UpdateProjectDto]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "partialUpdateProject", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getProject", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getProjects", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "deleteProject", null);
__decorate([
    (0, common_1.Delete)(':projectId/users/:userId'),
    __param(0, (0, common_1.Param)('projectId')),
    __param(1, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "removeUserFromProject", null);
__decorate([
    (0, common_1.Delete)(':projectId/client'),
    __param(0, (0, common_1.Param)('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "removeClientFromProject", null);
exports.ProjectController = ProjectController = __decorate([
    (0, common_1.Controller)('projects'),
    __param(1, (0, common_1.Inject)('AddUsersToProjectPort')),
    __param(2, (0, common_1.Inject)('AddClientToProjectPort')),
    __metadata("design:paramtypes", [projects_service_1.ProjectsService, Object, Object])
], ProjectController);
//# sourceMappingURL=project.controller.js.map