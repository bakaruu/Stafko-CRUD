export declare enum Status {
    Pending = "Pending",
    InProgress = "InProgress",
    Completed = "Completed",
    Active = "Active",
    default = "Pending"
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
