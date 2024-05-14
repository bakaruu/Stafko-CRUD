import { Controller, Post, Delete, Put, Patch, Body, Param } from '@nestjs/common';
import { TasksService } from '../../application/services/tasks.service'
import { UpdateTaskDto } from '../../application/dto/update-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TasksService) {}

    @Post(':projectId')
    async addTasksToProject(@Param('projectId') projectId: string, @Body('taskIds') taskIds: string[]) {
        return this.taskService.addTasksToProject(projectId, taskIds);
    }

    @Delete(':projectId/:taskId')
    async deleteTaskFromProject(@Param('projectId') projectId: string, @Param('taskId') taskId: string) {
        return this.taskService.deleteTaskFromProject(projectId, taskId);
    }

    @Put(':projectId/:taskId')
    async updateTaskInProject(@Param('projectId') projectId: string, @Param('taskId') taskId: string, @Body() updateTaskDto: UpdateTaskDto) {
        return this.taskService.updateTaskInProject(projectId, taskId, updateTaskDto);
    }


    @Patch(':projectId/:taskId')
    async patchTaskInProject(@Param('projectId') projectId: string, @Param('taskId') taskId: string, @Body() patchTaskDto: UpdateTaskDto) {
        return this.taskService.updateTaskInProject(projectId, taskId, patchTaskDto);
    }
}