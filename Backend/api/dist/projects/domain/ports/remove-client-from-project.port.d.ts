export interface RemoveClientFromProjectPort {
    removeClientFromProject(projectId: string): Promise<void>;
}
