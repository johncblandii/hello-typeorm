import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany} from 'typeorm';
import { Experience } from './Experience';
import { Media } from './Media';
import { User } from './User';

@Entity()
export class Charity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @OneToMany((type) => Experience, (experience) => experience.charity)
  experiences: Experience[];

  // @OneToMany((type) => Media, (media) => media.author)
  // images: Media[];

  // @OneToMany((type) => Media, (media) => media.author)
  // videos: Media[];
  
  // @OneToMany((type) => User, (user => user.author)
  // members: User[];
}