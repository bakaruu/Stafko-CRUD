import { CreateClientDto } from './create-client.dto';
declare const UpdateClientDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateClientDto>>;
export declare class UpdateClientDto extends UpdateClientDto_base {
    companyName: string;
    email: string;
    address: string;
    phone: string;
    industry: string;
}
export {};
