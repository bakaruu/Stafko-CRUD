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
let CreateProjectAdapter = class CreateProjectAdapter {
    constructor(projectRepository, userRepository) {
        this.projectRepository = projectRepository;
        this.userRepository = userRepository;
    }
    async createProject(project, userIds) {
        const users = await this.userRepository.findByIds(userIds);
        if (users.length !== userIds.length) {
            throw new common_1.NotFoundException(`Some users with ids ${userIds.join(', ')} not found`);
        }
        const existingProject = await this.projectRepository.findOne({ where: { name: project.name } });
        if (existingProject) {
            throw new common_1.ConflictException(`A project with the name ${project.name} already exists`);
        }
        project.users = users;
        project.status = project.status ? project.status : create_project_dto_1.Status.Pending;
        project.photoUrl = project.photoUrl ? project.photoUrl : "http://res.cloudinary.com/dqwqulk5l/image/upload/v1715173814/defaultProjectHome_ti0bid.jpg";
        return this.projectRepository.save(project);
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