export interface DeleteTasksToProjectPort {
    deleteTaskFromProject(projectId: string, taskId: string): Promise<void>;
}
