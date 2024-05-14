import { IsNotEmpty, IsString, IsOptional, IsArray, IsDate, IsEnum } from 'class-validator';


export class CreateTaskDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    type: string;

    @IsNotEmpty()
    @IsString()
    status: string;

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

