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
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const project_entity_1 = require("../../domain/entities/project.entity");
const client_entity_1 = require("../../../clients/domain/entities/client.entity");
const typeorm_1 = require("typeorm");
const create_project_adapter_1 = require("../../infrastructure/adapters/create-project.adapter");
const delete_project_adapter_1 = require("../../infrastructure/adapters//delete-project.adapter");
const get_project_adapter_1 = require("../../infrastructure/adapters//get-project.adapter");
const update_project_adapter_1 = require("../../infrastructure/adapters/update-project.adapter");
const get_all_project_adapter_1 = require("../../infrastructure/adapters//get-all-project.adapter");
const typeorm_2 = require("@nestjs/typeorm");
const user_entity_1 = require("../../../users/domain/entities/user.entity");
let ProjectsService = class ProjectsService {
    constructor(clientRepository, userRepository, projectRepository, createProjectAdapter, updateProjectAdapter, getProjectAdapter, deleteProjectAdapter, getAllProjectsAdapter) {
        this.clientRepository = clientRepository;
        this.userRepository = userRepository;
        this.projectRepository = projectRepository;
        this.createProjectAdapter = createProjectAdapter;
        this.updateProjectAdapter = updateProjectAdapter;
        this.getProjectAdapter = getProjectAdapter;
        this.deleteProjectAdapter = deleteProjectAdapter;
        this.getAllProjectsAdapter = getAllProjectsAdapter;
    }
    async createProject(dto, userIds) {
        let client = null;
        if (dto.clientId) {
            client = await this.clientRepository.findOne({ where: { id: dto.clientId } });
            if (!client) {
                throw new common_1.NotFoundException(`Client with id ${dto.clientId} not found`);
            }
        }
        const project = new project_entity_1.Project();
        project.name = dto.name;
        project.description = dto.description;
        project.photoUrl = dto.photoUrl;
        project.client = client;
        return this.createProjectAdapter.createProject(project, userIds);
    }
    async removeUserFromProject(projectId, userId) {
        const project = await this.projectRepository.findOne({ where: { id: projectId }, relations: ['users'] });
        if (!project) {
            throw new common_1.NotFoundException(`Project with id ${projectId} not found`);
        }
        project.users = project.users.filter(user => user.id !== userId);
        await this.projectRepository.save(project);
        const user = await this.userRepository.findOne({ where: { id: userId }, relations: ['projects'] });
        if (user) {
            user.projects = user.projects.filter(project => project.id !== projectId);
            await this.userRepository.save(user);
        }
    }
    async updateProject(id, dto) {
        return this.updateProjectAdapter.updateProject(id, dto);
    }
    async updatePartialProject(id, dto) {
        return this.updateProjectAdapter.updateProject(id, dto);
    }
    async getProject(id) {
        return this.getProjectAdapter.getProject(id);
    }
    async getProjects() {
        return this.getProjectAdapter.getProjects();
    }
    async getAllProjects() {
        return this.getAllProjectsAdapter.getAllProjects();
    }
    async deleteProject(id) {
        return this.deleteProjectAdapter.deleteProject(id);
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(client_entity_1.Client)),
    __param(1, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_2.InjectRepository)(project_entity_1.Project)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        create_project_adapter_1.CreateProjectAdapter,
        update_project_adapter_1.UpdateProjectAdapter,
        get_project_adapter_1.GetProjectAdapter,
        delete_project_adapter_1.DeleteProjectAdapter,
        get_all_project_adapter_1.GetAllProjectsAdapter])
], ProjectsService);
//# sourceMappingURL=projects.service.js.map