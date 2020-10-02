import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany} from 'typeorm';
import { Experience } from './Experience';

@Entity()
export class Media extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
  
  @Column()
  description: string;
  
  @Column()
  uri: number;

  @ManyToMany(type => Experience, experience => experience.images)
  experienceImages: Experience[];

  @ManyToMany(type => Experience, experience => experience.videos)
  experienceVideos: Experience[];  
}