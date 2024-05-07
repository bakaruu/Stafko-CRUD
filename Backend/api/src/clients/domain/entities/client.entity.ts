import { Project } from 'src/projects/domain/entities/project.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, OneToMany, ManyToOne } from 'typeorm';

@Entity()
@Unique(['email'])
export class Client {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    clientName: string;

    @Column()
    contactName: string;

    
    @Column()
    email: string;

    @Column()
    phone: string;
    
    @OneToMany(() => Project, project => project.client)
    projects: Project[]

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

