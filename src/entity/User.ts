import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from 'typeorm';

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()    
    type: string;
    
    @Column()
    firstName: string;

    @Column()
    lastName: string;
    
    @Column()    
    fullName: string;

    @Column()    
    username: string;

    @Column()    
    email: string;

    @Column()    
    phone: number;

    @Column()    
    bio: string;

    @Column()    
    location: string;

    @Column()    
    origin: string;

    @Column()    
    position: string;

    @Column()    
    workplace: string;

    @Column()    
    gender: string;

    @Column()    
    birthDate: string;

    @Column()    
    customUrl: string;

    @Column()    
    referralId: string;

    @Column()    
    instagram: string;

    @Column()    
    showAttributes: boolean;

    @Column()    
    isHero: boolean;  
}
