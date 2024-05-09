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
const delete_project_adapter_1 = require("../../infrastructure/adapters/delete-project.adapter");
const get_project_adapter_1 = require("../../infrastructure/adapters/get-project.adapter");
const update_project_adapter_1 = require("../../infrastructure/adapters/update-project.adapter");
const get_all_project_adapter_1 = require("../../infrastructure/adapters/get-all-project.adapter");
const typeorm_2 = require("@nestjs/typeorm");
let ProjectsService = class ProjectsService {
    constructor(clientRepository, createProjectAdapter, updateProjectAdapter, getProjectAdapter, deleteProjectAdapter, getAllProjectsAdapter) {
        this.clientRepository = clientRepository;
        this.createProjectAdapter = createProjectAdapter;
        this.updateProjectAdapter = updateProjectAdapter;
        this.getProjectAdapter = getProjectAdapter;
        this.deleteProjectAdapter = deleteProjectAdapter;
        this.getAllProjectsAdapter = getAllProjectsAdapter;
    }
    async createProject(dto) {
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
        return this.createProjectAdapter.createProject(project);
    }
    updateProject(id, dto) {
        return this.updateProjectAdapter.updateProject(id, dto);
    }
    getProject(id) {
        return this.getProjectAdapter.getProject(id);
    }
    getProjects() {
        return this.getProjectAdapter.getProjects();
    }
    async getAllProjects() {
        return this.getAllProjectsAdapter.getAllProjects();
    }
    deleteProject(id) {
        return this.deleteProjectAdapter.deleteProject(id);
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(client_entity_1.Client)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        create_project_adapter_1.CreateProjectAdapter,
        update_project_adapter_1.UpdateProjectAdapter,
        get_project_adapter_1.GetProjectAdapter,
        delete_project_adapter_1.DeleteProjectAdapter,
        get_all_project_adapter_1.GetAllProjectsAdapter])
], ProjectsService);
//# sourceMappingURL=projects.service.js.map