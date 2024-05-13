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
exports.CreateUserAdapter = void 0;
const user_entity_1 = require("../../domain/entities/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const common_1 = require("@nestjs/common");
const bcrypt = require("bcryptjs");
const image_uploader_port_1 = require("../../domain/ports/image-uploader.port");
let CreateUserAdapter = class CreateUserAdapter {
    constructor(userRepository, imageUploader) {
        this.userRepository = userRepository;
        this.imageUploader = imageUploader;
    }
    async createUser(createUserDto) {
        const newUser = new user_entity_1.User();
        newUser.name = createUserDto.name;
        newUser.email = createUserDto.email;
        const salt = await bcrypt.genSalt();
        newUser.password = await bcrypt.hash(createUserDto.password, salt);
        newUser.photoUrl = "http://res.cloudinary.com/dqwqulk5l/image/upload/v1715173814/g355zdao69izocaytd7f.svg";
        return this.userRepository.save(newUser);
    }
};
exports.CreateUserAdapter = CreateUserAdapter;
exports.CreateUserAdapter = CreateUserAdapter = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        image_uploader_port_1.default])
], CreateUserAdapter);
//# sourceMappingURL=create-user.adapter.js.map