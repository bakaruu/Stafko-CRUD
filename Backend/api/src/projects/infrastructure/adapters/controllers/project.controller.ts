// project.controller.ts
import { Body, Controller, Patch, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { CreateProjectDto } from '../../../application/dto/create-project.dto';
import { UpdateProjectDto } from '../../../application/dto/update-project.dto';
import { ProjectsService } from '../../../application/services/projects.service';
import { Project } from '../../../domain/entities/project.entity';
import { AddUsersToProjectPort } from '../../../domain/ports/add-users-to-project.port';

@Controller('projects')
export class ProjectController {
  constructor(
    private readonly projectService: ProjectsService,
    @Inject('AddUsersToProjectPort') private readonly addUsersToProjectPort: AddUsersToProjectPort,
  ) {}

  @Post()
  async createProject(@Body() dto: CreateProjectDto): Promise<Project> {
    return this.projectService.createProject(dto);
  }

  @Post(':id/users')
  async addUsersToProject(@Param('id') id: string, @Body('userIds') userIds: string[]): Promise<Project> {
    return this.addUsersToProjectPort.addUsersToProject(id, userIds);
  }

  @Put(':id')
  async updateProject(@Param('id') id: string, @Body() dto: UpdateProjectDto): Promise<Project> {
    return this.projectService.updateProject(id, dto);
  }

  @Patch(':id')
  async partialUpdateProject(@Param('id') id: string, @Body() dto: UpdateProjectDto): Promise<Project> {
    return this.projectService.updatePartialProject(id, dto);
  }

  @Get(':id')
  async getProject(@Param('id') id: string): Promise<Project> {
    return this.projectService.getProject(id);
  }

  @Get()
  async getProjects(): Promise<Project[]> {
    return this.projectService.getProjects();
  }

  @Delete(':id')
  async deleteProject(@Param('id') id: string): Promise<void> {
    return this.projectService.deleteProject(id);
  }
}