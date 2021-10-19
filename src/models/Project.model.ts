import { Client } from "./Client.model";
export class Project {
  public title: string;
  public url: string;
  public technologies: string[];
  public summary: string;
  public subtitle: string;
  public start: string;
  public solution: string;
  public role: string;
  public projectType: string;
  public images: string[];
  public end: string;
  public client: Client;
  public challenge: string;
  constructor(partialProject?: Partial<Project>) {
    (this.challenge = partialProject?.challenge || ""),
      (this.title = partialProject?.title || ""),
      (this.url = partialProject?.url || ""),
      (this.technologies = partialProject?.technologies || []),
      (this.summary = partialProject?.summary || ""),
      (this.subtitle = partialProject?.subtitle || ""),
      (this.start = partialProject?.start || ""),
      (this.solution = partialProject?.solution || ""),
      (this.role = partialProject?.role || ""),
      (this.projectType = partialProject?.projectType || ""),
      (this.images = partialProject?.images || []),
      (this.end = partialProject?.end || ""),
      (this.client = partialProject?.client || new Client());
  }
}
