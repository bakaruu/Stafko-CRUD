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
exports.CreateProjectAdapter = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const project_entity_1 = require("../../domain/entities/project.entity");
const user_entity_1 = require("../../../users/domain/entities/user.entity");
const create_project_dto_1 = require("../../application/dto/create-project.dto");
const axios_1 = require("axios");
let CreateProjectAdapter = class CreateProjectAdapter {
    constructor(projectRepository, userRepository) {
        this.projectRepository = projectRepository;
        this.userRepository = userRepository;
    }
    async createProject(project, userIds) {
        const users = await this.userRepository.findByIds(userIds);
        const workspaceId = '663a196d5e8ef3683b21dec8';
        const clockifyApiKey = 'NTk4NDg5ZjItNzdlNC00ZDY5LTg5ZTQtM2YyYjgyZmIyYmE0';
        if (users.length !== userIds.length) {
            throw new common_1.NotFoundException(`Some users with ids ${userIds.join(', ')} not found`);
        }
        project.users = users;
        project.status = project.status ? project.status : create_project_dto_1.Status.Pending;
        project.photoUrl = project.photoUrl ? project.photoUrl : "http://res.cloudinary.com/dqwqulk5l/image/upload/v1715173814/defaultProjectHome_ti0bid.jpg";
        try {
            const clockifyProjectsResponse = await axios_1.default.get(`https://api.clockify.me/api/v1/workspaces/${workspaceId}/projects`, {
                headers: { 'X-Api-Key': clockifyApiKey }
            });
            const projectExists = clockifyProjectsResponse.data.some(p => p.name === project.name);
            if (projectExists) {
                throw new Error('Project already exists in Clockify');
            }
            const clockifyProject = {
                name: project.name,
                isPublic: true,
                billable: true,
                color: "#F44336",
            };
            console.log('Sending data to Clockify:', clockifyProject);
            const clockifyResponse = await axios_1.default.post(`https://api.clockify.me/api/v1/workspaces/${workspaceId}/projects`, clockifyProject, {
                headers: { 'X-Api-Key': clockifyApiKey }
            });
            const clockifyProjectId = clockifyResponse.data.id;
            project.clockifyId = clockifyProjectId;
            const savedProject = await this.projectRepository.save(project);
            return savedProject;
        }
        catch (error) {
            console.error('Error creating project in Clockify:', error.response ? error.response.data : error.message);
            if (error.message.includes('Project already exists in Clockify')) {
                throw new Error('Project already exists in Clockify');
            }
            throw new Error('Failed to create project in Clockify');
        }
    }
};
exports.CreateProjectAdapter = CreateProjectAdapter;
exports.CreateProjectAdapter = CreateProjectAdapter = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_entity_1.Project)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CreateProjectAdapter);
//# sourceMappingURL=create-project.adapter.js.map