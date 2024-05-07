export interface DeleteProjectPort {
    deleteProject(id: string): Promise<void>;
  }