export interface IWhyUsData {
  title: string;
  desc: string;
  img: string;
}

export interface ITestimonial {
  image: string;
  name: string;
  message: string;
}

export interface IPartners {
  image: string;
  name: string;
}

export interface IProject {
  title: string;
  desc: string;
  background: string;
}

export interface IAchievement {
  value: string;
  desc: string;
}

export interface IFooterData {
  address: string;
  pages: { text: string; href: string }[];
  socials: { text: string; href: string }[];
  contacts: { text: string; href: string }[];
}

export interface IBanner {
  image: string;
  alt: string;
}

export interface ITab {
  text: string;
  value: string;
  image: string;
}

export interface IProgram {
  slug: string;
  info: string | null;
  title: string;
  time?: string;
  price: string | null;
  totalSessions: number | null;
  image: string;
  location: string | null;
  desc: string | null;
  instructors?: IInstructor[];
  materials: string[];
  schedules: ISchedule[];
  pricePer: string | null;
  benefits: IBenefit[];
}

export interface IBenefit {
  title: string;
  icon: string;
}

export interface IInstructor {
  name: string;
  title: string;
  image: string;
  instagram?: string;
  desc?: string;
}

export interface IMaterial {
  text: string;
  image: string;
}

export interface ISchedule {
  batch: number;
  startDate: Date;
  endDate: Date;
}
