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

    @ManyToOne(() => Client, client => client.projects)
    client: Client;

    @ManyToMany(() => User, user => user.projects)
    users: User[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}