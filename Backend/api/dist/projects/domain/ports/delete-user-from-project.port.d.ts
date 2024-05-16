export interface RemoveUserFromProjectPort {
    removeUserFromProject(projectId: string, userId: string): Promise<void>;
}
