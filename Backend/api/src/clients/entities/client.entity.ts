
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Client {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    companyName: string;

    @Column()
    email: string;
    
    @Column()
    address: string;

    @Column()
    phone: string;

    @Column()
    industry: string;

    

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}