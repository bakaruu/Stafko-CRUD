import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Project } from '../../../projects/domain/entities/project.entity';

export enum TaskType {
    Frontend = 'Frontend',
    Backend = 'Backend',
    // Add any other task types here
}

@Entity()
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ type: 'enum', enum: TaskType })
    type: TaskType;

    @Column()
    status: string; // Done, In progress, etc.

    @Column({ nullable: true })
    startTime: Date;

    @Column({ nullable: true })
    endTime: Date;

    @Column({ nullable: true })
    assignedTo: string; // The name of the programmer working on the task

    @Column({ nullable: true })
    clockifyTimerId: string; // The ID of the Clockify timer for this task

    @ManyToOne(() => Project, project => project.tasks)
    project: Project;
}