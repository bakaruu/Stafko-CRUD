import { IsNotEmpty, IsString, IsOptional, IsArray, IsDate, IsEnum } from 'class-validator';

export enum Status {
  Pending = 'Pending',
  InProgress = 'InProgress',
  Completed = 'Completed', 
  Active = 'Active',

  default = 'Pending'
}

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  photoUrl?: string;

  @IsOptional()
  @IsArray()
  userIds?: string[];

  @IsOptional()
  @IsString()
  clientId?: string;

  @IsString()
  @IsOptional()
  clockifyId?: string;

  

  // Add these fields
  @IsOptional()
  @IsEnum(Status)
  status?: Status ;

  @IsOptional()
  @IsString()
  progress?: number;

  @IsOptional()
  @IsDate()
  deadline?: String;
}