import { Project } from 'src/projects/domain/entities/project.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, JoinTable, ManyToMany } from 'typeorm';

@Entity()
@Unique(['email'])
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    lastName: string;

    
    @Column()
    email: string;

    @Column()
    password: string;

    @Column({
        type: 'enum',
        enum: ['ADMIN', 'USER'],
        default: 'USER',
    })
    role: UserRole;

    @Column({ nullable: true })
    jobTitle: string;

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
    ADMIN = 'ADMIN',
    USER = 'USER',
}
