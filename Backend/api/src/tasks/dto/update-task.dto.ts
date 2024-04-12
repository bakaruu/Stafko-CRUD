import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsIn, IsNotEmpty, IsOptional, IsString, isString } from 'class-validator';
import { TaskStatus } from '../entities/task.entity';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    
    @IsString()
    @IsOptional()
    title?: string;
  
    @IsString()
    @IsOptional()
    description?: string;

    @IsIn([TaskStatus.PENDING, TaskStatus.IN_PROGRESS, 
        TaskStatus.DONE])
    @IsOptional()
    status?: string;
}


