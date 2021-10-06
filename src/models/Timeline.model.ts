import moment from "moment";
export class TimelineModel {
  public title: string;
  public summary: string;
  public start: string;
  public thumbnail: string;
  public technologies: [string];
  constructor(timeLineObj?: Partial<TimelineModel>) {
    this.title = timeLineObj?.title || "";
    this.summary = timeLineObj?.summary || "";
    this.start = timeLineObj?.start || "";
    this.thumbnail = timeLineObj?.thumbnail || "";
    this.technologies = timeLineObj?.technologies || [""];
  }
  static deserializeList(apiResult: any): TimelineModel[] {
    const timelineModelObj: TimelineModel[] = [];
    const apiResponse = apiResult["Projects"];
    if (Array.isArray(apiResponse)) {
      apiResponse.forEach((timelineObj: TimelineModel) => {
        timelineModelObj.push(timelineObj);
      });
    }

    return this.filterOutProjects(timelineModelObj);
  }
  static filterOutProjects(timeline: TimelineModel[]): TimelineModel[] {
    return timeline.sort(
      (a: TimelineModel, b: TimelineModel) =>
        this.convNum(b.start) - this.convNum(a.start)
    );
  }

  static convNum(date: string): number {
    const dateComp = moment(date).format("YYYYY");
    return Number(dateComp);
  }
}
