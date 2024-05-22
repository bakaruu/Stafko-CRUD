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
exports.DeleteProjectAdapter = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const project_entity_1 = require("../../domain/entities/project.entity");
const axios_1 = require("axios");
let DeleteProjectAdapter = class DeleteProjectAdapter {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async deleteProject(id) {
        console.log('Deleting project with id:', id);
        const project = await this.projectRepository.findOne({ where: { id } });
        if (!project) {
            console.error('Project not found in local database with id:', id);
            throw new Error('Project not found');
        }
        console.log('Found project in local database:', project);
        const workspaceId = '663a196d5e8ef3683b21dec8';
        const clockifyApiKey = 'NTk4NDg5ZjItNzdlNC00ZDY5LTg5ZTQtM2YyYjgyZmIyYmE0';
        try {
            console.log('Deleting project in Clockify with id:', project.clockifyId);
            await axios_1.default.delete(`https://api.clockify.me/api/v1/workspaces/${workspaceId}/projects/${project.clockifyId}`, {
                headers: { 'X-Api-Key': clockifyApiKey }
            });
            console.log('Deleted project in Clockify, now deleting in local database');
            await this.projectRepository.delete(id);
            console.log('Deleted project in local database');
        }
        catch (error) {
            console.error('Error deleting project in Clockify:', error.response ? error.response.data : error.message);
            throw new Error('Failed to delete project in Clockify');
        }
    }
};
exports.DeleteProjectAdapter = DeleteProjectAdapter;
exports.DeleteProjectAdapter = DeleteProjectAdapter = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_entity_1.Project)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DeleteProjectAdapter);
//# sourceMappingURL=delete-project.adapter.js.map