import { Client } from "../../../clients/domain/entities/client.entity";
import { User } from "../../../users/domain/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';


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
    deadline: Date;

    @ManyToOne(() => Client, client => client.projects, { nullable: true })
    client: Client;

    @ManyToMany(() => User, user => user.projects)
    users: User[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}