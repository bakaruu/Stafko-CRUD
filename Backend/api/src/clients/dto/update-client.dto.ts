import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';
import { IsEmail, IsNotEmpty, IsString, IsOptional, IsEnum } from 'class-validator';

export class UpdateClientDto extends PartialType(CreateClientDto) {

    @IsString()
    @IsOptional()
    companyName: string;

    @IsEmail()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    address: string;

    @IsString()
    @IsOptional()
    phone: string;

    @IsString()
    @IsOptional()
    industry: string;
}