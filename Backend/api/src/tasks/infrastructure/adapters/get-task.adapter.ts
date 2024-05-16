import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../../domain/entities/task.entity';
import { GetTaskPort } from '../../domain/ports/get-task.port';

@Injectable()
export class GetTaskAdapter implements GetTaskPort {
    [x: string]: any;
    constructor(
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>,
    ) {}

    async getTask(id: string): Promise<Task> {
        const found = await this.taskRepository.findOne({ where: { id } });
        if (!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
        return found;
    }
}