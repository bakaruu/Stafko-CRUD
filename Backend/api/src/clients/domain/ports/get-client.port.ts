import { Client } from "../entities/client.entity";

// get-client.port.ts
export interface GetClientPort {
    getClient(id: string): Promise<Client>;
  }