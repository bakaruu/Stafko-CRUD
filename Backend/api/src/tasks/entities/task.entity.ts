/**
 * Represents the possible status values 
 * for a task.
 */
export enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

/**
 * Represents a task entity.
 */
export class Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  created_at: Date;
  updated_at: Date;
  
}
