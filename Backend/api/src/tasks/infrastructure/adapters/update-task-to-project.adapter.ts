import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UpdateTaskDto } from "src/tasks/application/dto/update-task.dto";
import { Task } from "src/tasks/domain/entities/tasks.entity";
import { Repository } from "typeorm";

@Injectable()
export class UpdateOrPatchTaskInProjectAdapter {
    constructor(
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>,
    ) {}

    async updateOrPatchTaskInProject(taskId: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
        const task = await this.taskRepository.findOne({ where: { id: taskId } });
                if (!task) {
            throw new NotFoundException(`Task with id ${taskId} not found`);
        }
        const updated = this.taskRepository.merge(task, updateTaskDto);
        return this.taskRepository.save(updated);
    }
}