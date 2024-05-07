import { Client } from "../entities/client.entity";

// get-all-clients.port.ts
export interface GetAllClientsPort {
    getAllClients(): Promise<Client[]>;
  }