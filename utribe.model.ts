export interface BaseEntity {
  id: string;
  createdAt: string;
  createdBy: string;
}

export interface Message extends BaseEntity {
  userId: string;
  data: string;
}

export interface Interest extends BaseEntity {
  title: string;
  description: string;
  importance: number;
}

export interface Category extends BaseEntity {
  title: string;
  description: string;
  importance: number;
}

export interface Media extends BaseEntity {
  title: string;
  description: string;
  uri: string;
}

export interface Charity extends BaseEntity {
  title: string;
  description: string;
  images: Array<Media>;
  videos: Array<Media>;
  members: Array<User>;
}

export interface Experience extends BaseEntity {
  title: string;
  description: string;
  dateStart: string;
  dateEnd: string;
  timeStart: string;
  timeEnd: string;
  type: string;
  location: string;
  groupSize: number;
  minPrice: number;
  requirements: string;
  cancellation: string;
  maxSpectators?: number;
  maxParticipants?: number;
  thrivecartId?: string;
  hidden?: boolean;
  charity: Charity;
  images: Array<Media>;
  videos: Array<Media>;
  interests: Array<Interest>;
  categories: Array<Category>;
  hosts: Array<User>;
  influencers: Array<User>;
  attendees: Array<User>;
  registrations: Array<Registration>;
}

export interface Registration extends BaseEntity {
  userId: string;
  experienceId: string;
  registrationId: string;
  ticketType?: string;
}

export interface User extends BaseEntity {
  type: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  username?: string;
  email: string;
  phone?: number;
  bio?: string;
  location?: string;
  origin?: string;
  position?: string;
  workplace?: string;
  gender?: string;
  birthDate?: string;
  customUrl?: string;
  referralId?: string;
  instagram?: string;
  showAttributes?: boolean;
  isHero?: boolean;
  images?: Array<Media>;
  registrations?: Array<Registration>;
  conversations?: Array<Message>;
  interests?: Array<Interest>;
}
