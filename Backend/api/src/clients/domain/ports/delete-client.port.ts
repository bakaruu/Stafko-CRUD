export interface DeleteClientPort {
    deleteClient(id: string): Promise<void>;
  }