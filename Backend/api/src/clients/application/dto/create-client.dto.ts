import { IsNotEmpty, IsEmail, IsString, IsPhoneNumber } from 'class-validator';


export class CreateClientDto {
    @IsNotEmpty()
    @IsString()
    clientName: string;

    @IsNotEmpty()
    @IsString()
    contactName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsPhoneNumber()
    phone: string;
}




