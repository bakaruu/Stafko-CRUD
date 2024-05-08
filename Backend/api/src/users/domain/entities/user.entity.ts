import { Project } from 'src/projects/domain/entities/project.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, JoinTable, ManyToMany } from 'typeorm';

@Entity()
@Unique(['email'])
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({nullable: true})
    lastName: string;

    
    @Column()
    email: string;

    @Column()
    password: string;

    @Column({
        type: 'enum',
        enum: ['Admin', 'User', 'Client', 'Frontend', 'Backend', 'Fullstack', 'DevOps', 'Mobile', 'Manager', 'HR'],
        default: 'User',
    })
    role: UserRole;

    @Column({ nullable: true })
    photoUrl: string;

    @ManyToMany(() => Project, project => project.users)
    @JoinTable()
    projects: Project[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export enum UserRole {
    ADMIN = 'Admin',
    USER = 'User',
    CLIENT = 'Client',
    FRONTEND = 'Frontend',
    BACKEND = 'Backend',
    FULLSTACK = 'Fullstack',
    DEVOPS = 'DevOps',
    MOBILE = 'Mobile',
    MANAGER = 'Manager',
    HR = 'HR',
    
}