import { Client } from "../../../clients/domain/entities/client.entity";
import { User } from "../../../users/domain/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, OneToMany, JoinTable } from 'typeorm';
import { Task } from "../../../tasks/domain/entities/task.entity";

@Entity()
export class Project {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ nullable: true })
    photoUrl: string;

    @Column({ nullable: true })
    progress: number;

    @Column({ nullable: true })
    status: string;

    @Column({ nullable: true })
    deadline: String;

    @Column({ nullable: true })
    clockifyId: string;

    @ManyToOne(() => Client, client => client.projects, { nullable: true })
    client: Client;

    @ManyToMany(() => User, user => user.projects)
    users: User[];


    @OneToMany(() => Task, task => task.project)
    tasks: Task[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}