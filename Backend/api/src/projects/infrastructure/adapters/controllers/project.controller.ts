// project.controller.ts
import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
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
  createProject(@Body() dto: CreateProjectDto): Promise<Project> {
    return this.projectService.createProject(dto);
  }

  @Post(':id/users')
  addUsersToProject(@Param('id') id: string, @Body('userIds') userIds: string[]): Promise<Project> {
    return this.addUsersToProjectPort.addUsersToProject(id, userIds);
  }

  @Put(':id')
  updateProject(@Param('id') id: string, @Body() dto: UpdateProjectDto): Promise<Project> {
    return this.projectService.updateProject(id, dto);
  }

  @Get(':id')
  getProject(@Param('id') id: string): Promise<Project> {
    return this.projectService.getProject(id);
  }

  @Get()
  getProjects(): Promise<Project[]> {
    return this.projectService.getProjects();
  }

  @Delete(':id')
  deleteProject(@Param('id') id: string): Promise<void> {
    return this.projectService.deleteProject(id);
  }
}