import { IClient } from "./Client.interface";
export interface IProject {
  title: string;
  url: string;
  technologies: string[];
  summary: string;
  subtitle: string;
  start: string;
  solution: string;
  role: string;
  projectType: string;
  images: string[];
  end: string;
  client: IClient;
  challenge: string;
}
