export interface IWhyUsData {
  title: string;
  desc: string;
  img: string;
}

export interface ITestimonial {
  id: number;
  image: string;
  name: string;
  message: string;
}

export interface IPartners {
  image: string;
  name: string;
}

export interface IProject {
  id: number;
  title: string;
  desc: string;
  background: string;
}

export interface IVision {
  vision: string;
}

export interface ISummary {
  summary: string;
}

export interface IAchievement {
  value: string;
  desc: string;
}

export interface IFooterData {
  address: string;
  pages: { id: number; text: string; href: string }[];
  socials: { id: number; text: string; href: string }[];
  contacts: { id: number; text: string; href: string }[];
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
  id: number;
  info: string;
  title: string;
  date: string;
  price: string;
  totalSessions: number;
  image: string;
  currentBatch: number;
}
