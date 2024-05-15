import { Injectable } from "@nestjs/common";
import { Task } from "src/tasks/domain/entities/task.entity";
import { GetAllTaskPort } from "src/tasks/domain/ports/get-all-task.port";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class GetAllTaskAdapter implements GetAllTaskPort {
    constructor(
        @InjectRepository(Task) // Utiliza @InjectRepository para inyectar Repository<Task>
        private readonly taskRepository: Repository<Task>
    ) {}

    async getAllTasks(): Promise<Task[]> {
        return this.taskRepository.find({relations: ['project']});
    }
}