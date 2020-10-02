import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Registration extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;
  
  @Column()
  experienceId: string;
  
  @Column()
  registrationId: string;
  
  @Column()
  ticketType?: string;
}