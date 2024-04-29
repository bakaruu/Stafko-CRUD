import { IsString, IsEmail, IsOptional } from 'class-validator';

// CreateClientDto.ts
export class CreateClientDto {
    @IsString()
    companyName: string;

    @IsEmail()
    email: string;

    @IsString()
    address: string;

    @IsString()
    phone: string;

    @IsOptional()
    @IsString()
    industry: string;
}