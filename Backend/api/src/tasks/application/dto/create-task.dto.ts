import { IsNotEmpty, IsString, IsOptional, IsArray, IsDate, IsEnum } from 'class-validator';
import { TaskStatus, TaskType } from 'src/tasks/domain/entities/task.entity';


export class CreateTaskDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEnum(TaskType)
    type: TaskType;

    @IsNotEmpty()
    @IsEnum(TaskStatus)
    status: TaskStatus;

    @IsOptional()
    @IsDate()
    startTime: Date;

    @IsOptional()
    @IsDate()
    endTime: Date;

    @IsOptional()
    @IsString()
    assignedTo: string;

    @IsNotEmpty()
    @IsString()
    projectId: string;
}

