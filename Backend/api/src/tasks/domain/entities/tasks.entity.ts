import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Project } from '../../../projects/domain/entities/project.entity';

@Entity()
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    type: string; // Frontend, Backend, etc.

    @Column()
    status: string; // Done, In progress, etc.

    @Column({ nullable: true })
    startTime: Date;

    @Column({ nullable: true })
    endTime: Date;

    @Column({ nullable: true })
    assignedTo: string; // The name of the programmer working on the task

    @ManyToOne(() => Project, project => project.tasks)
    project: Project;
}