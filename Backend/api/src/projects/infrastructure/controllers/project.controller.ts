// project.controller.ts
import { Body, Controller, Patch, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { CreateProjectDto } from '../../application/dto/create-project.dto';
import { UpdateProjectDto } from '../../application/dto/update-project.dto';
import { ProjectsService } from '../../application/services/projects.service';
import { Project } from '../../domain/entities/project.entity';
import { AddUsersToProjectPort } from '../../domain/ports/add-users-to-project.port';
import { AddClientToProjectPort } from '../../domain/ports/add-client-to-project.port'; // Add missing import
@Controller('projects')
export class ProjectController {
  constructor(
    private readonly projectService: ProjectsService,
    @Inject('AddUsersToProjectPort') private readonly addUsersToProjectPort: AddUsersToProjectPort,
    @Inject('AddClientToProjectPort') private readonly addClientToProjectPort: AddClientToProjectPort, // Add missing parameter
  ) { }

  @Post()
  async createProject(@Body() dto: CreateProjectDto): Promise<Project> {
    return this.projectService.createProject(dto, dto.userIds || []);
  }

  @Post(':id/users')
  async addUsersToProject(@Param('id') id: string, @Body('users') userIds: string[]): Promise<Project> {
    return this.addUsersToProjectPort.addUsersToProject(id, userIds);
  }

  @Post(':id/client')
  async addClientToProject(@Param('id') id: string, @Body('client') clientId: string): Promise<Project> {
    return this.addClientToProjectPort.addClientToProject(id, clientId);
  }

  @Put(':id')
  async updateProject(@Param('id') id: string, @Body() dto: UpdateProjectDto): Promise<Project> {
    return this.projectService.updateProject(id, dto);
  }

  @Patch(':id')
  async partialUpdateProject(@Param('id') id: string, @Body() dto: UpdateProjectDto): Promise<Project> {
    return this.projectService.updatePartialProject(id, dto);
  }

  @Put(':projectId/client/:clientId')
  async updateProjectClient(@Param('projectId') projectId: string, @Param('clientId') clientId: string): Promise<Project> {
    return this.projectService.updateProjectClient(projectId, clientId);
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

  @Delete(':projectId/users/:userId')
  async removeUserFromProject(@Param('projectId') projectId: string, @Param('userId') userId: string): Promise<void> {
    await this.projectService.removeUserFromProject(projectId, userId);
  }

  @Delete(':projectId/client')
  async removeClientFromProject(@Param('projectId') projectId: string): Promise<void> {
    await this.projectService.removeClientFromProject(projectId);
  }


}