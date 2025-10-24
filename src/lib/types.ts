import type { ReactNode } from "react";

export interface About {
  image?: string;
  name: string;
  title: string;
  description: string;
  resume: string;
  mail: string;
  linkedin: string;
  twitter: string;
  github: string;
  instagram: string;
}

export interface Experience {
  id: number;
  image?: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  url?: string;
}

export interface Education {
  id: number;
  logo?: string;
  institution: string;
  degree: string;
  period: string;
  url?: string;
}

export interface Skill {
  id: number;
  name: string;
  image: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  images?: string[];
  videos?: string[];
  techStack?: string[];
  websiteUrl?: string;
  sourceUrl?: string;
}

export interface Contact {
  twitter: string;
  linkedin: string;
  mail: string;
}

export interface Social {
  icon: React.ElementType;
  label: string;
  url: string;
}

export interface Data {
  about: About;
  experiences: Experience[];
  educations: Education[];
  skills: Skill[];
  projects: Project[];
  contact: Contact;
  socials: Social[];
}

export interface InitialsAvatarProps {
  name: string;
  style?: string;
}

export interface TypewriterProps {
  text: string;
  speed?: number;
  pause?: number;
}

export interface FadeBlurStaggerItemProps {
  children: ReactNode;
  index: number;
  delayPerItem?: number;
  duration?: number;
}

export interface StaggerProps {
  children: ReactNode;
  stagger?: number;
  className?: string;
}

export interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}
