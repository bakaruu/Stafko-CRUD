import { Client } from "../entities/client.entity";
export interface GetAllClientsPort {
    getAllClients(): Promise<Client[]>;
}
