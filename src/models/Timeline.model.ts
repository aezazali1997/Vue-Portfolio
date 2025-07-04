import moment from "moment";
import { IProjectYear } from "@/interfaces/ProjectsYear.interface";
import { IApiResult } from "@/interfaces/ApiResult.interface";
export class TimelineModel {
  public id: string;
  public title: string;
  public summary: string;
  public start: string;
  public thumbnail: string;
  public technologies: [string];
  constructor(timeLineObj?: Partial<TimelineModel>) {
    this.id = timeLineObj?.id || "";
    this.title = timeLineObj?.title || "";
    this.summary = timeLineObj?.summary || "";
    this.start = timeLineObj?.start || "";
    this.thumbnail = timeLineObj?.thumbnail || "";
    this.technologies = timeLineObj?.technologies || [""];
  }
  static deserializeList(apiResult: IApiResult): IProjectYear[] {
    const timelineModelObj: TimelineModel[] = [];
    const apiResponse = apiResult.Projects;
    if (Array.isArray(apiResponse)) {
      apiResponse.forEach((timelineObj: TimelineModel) => {
        timelineModelObj.push(timelineObj);
      });
    }

    const projects: TimelineModel[] = this.filterOutProjects(timelineModelObj);
    return this.filterByYear(projects);
  }
  static filterOutProjects(apiResult: TimelineModel[]): TimelineModel[] {
    return apiResult.sort(
      (a: TimelineModel, b: TimelineModel) =>
        this.convNum(b.start) - this.convNum(a.start)
    );
  }

  static convNum(date: string): number {
    const dateComp = moment(date).format("YYYYY");
    return Number(dateComp);
  }
  static filterByYear(apiResult: TimelineModel[]): IProjectYear[] {
    let indexYear = 0;
    const projectByYear: IProjectYear[] = [
      {
        year: this.convNum(apiResult[0].start),
        projects: [apiResult[0]],
      },
    ];
    for (let i = 1; i < apiResult.length; i++) {
      if (
        this.convNum(apiResult[i].start) ===
        this.convNum(apiResult[i - 1].start)
      ) {
        projectByYear[indexYear].projects.push(apiResult[i]);
      } else {
        projectByYear.push({
          year: this.convNum(apiResult[i].start),
          projects: [apiResult[i]],
        });
        indexYear++;
      }
    }
    return projectByYear;
  }
}
