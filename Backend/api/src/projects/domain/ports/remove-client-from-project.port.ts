// remove-client-from-project.port.ts
export interface RemoveClientFromProjectPort {
    removeClientFromProject(projectId: string): Promise<void>;
}
