import { Client } from "../entities/client.entity";
export interface GetClientPort {
    getClient(id: string): Promise<Client>;
}
