import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Category } from './Category';
import { Charity } from './Charity';
import { Interest } from './Interest';
import { Media } from './Media';
import { User } from './User';

@Entity()
export class Experience extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  dateStart: string;

  @Column()
  dateEnd: string;

  @Column()
  timeStart: string;

  @Column()
  timeEnd: string;

  @Column()
  type: string;

  @Column()
  location: string;

  @Column()
  groupSize: number;

  @Column()
  minPrice: number;

  @Column()
  requirements: string;

  @Column()
  cancellation: string;

  @Column()
  maxSpectators: number;

  @Column()
  maxParticipants: number;

  @Column()
  thrivecartId: string;

  @Column()
  hidden: boolean;

  @ManyToOne((type) => Charity, (charity) => charity.experiences)
  charity: Charity;

  @ManyToMany((type) => Media, (media) => media.experienceImages)
  @JoinTable()
  images: Media[];

  @ManyToMany((type) => Media, (media) => media.experienceVideos)
  @JoinTable()
  videos: Media[];

  @ManyToMany((type) => Interest, (interest) => interest.experiences)
  @JoinTable()
  interests: Interest[];

  @ManyToMany((type) => Category, (category) => category.experiences)
  @JoinTable()
  categories: Category[];

  @ManyToMany((type) => User, (user) => user.hostExperiences)
  @JoinTable()
  hosts: User[];

  @ManyToMany((type) => User, (user) => user.influenceExperiences)
  @JoinTable()
  influencers: User[];

  @ManyToMany((type) => User, (user) => user.attendExperiences)
  @JoinTable()
  attendees: User[];

  // registrations: Registration[];
}
