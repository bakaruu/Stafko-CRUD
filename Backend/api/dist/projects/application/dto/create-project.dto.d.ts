declare enum Status {
    Pending = "Pending",
    InProgress = "InProgress",
    Completed = "Completed"
}
export declare class CreateProjectDto {
    name: string;
    description: string;
    photoUrl?: string;
    userIds?: string[];
    clientId?: string;
    status?: Status;
    progress?: number;
    deadline?: String;
}
export {};
