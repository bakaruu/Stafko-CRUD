import { Project } from "src/projects/domain/entities/project.entity";
import { Task } from "src/tasks/domain/entities/task.entity";
import { Repository } from "typeorm";
export declare class DeleteTaskToProjectAdapter {
    private readonly projectRepository;
    private readonly taskRepository;
    constructor(projectRepository: Repository<Project>, taskRepository: Repository<Task>);
    deleteTaskFromProject(projectId: string, taskId: string): Promise<void>;
}
