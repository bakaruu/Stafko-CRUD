

export interface DeleteTaskPort {
    deleteTask(id: string): Promise<void>;
  }