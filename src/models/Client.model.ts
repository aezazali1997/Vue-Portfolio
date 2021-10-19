export class Client {
  public name: string;
  public logo: string;
  constructor(partialClient?: Partial<Client>) {
    (this.logo = partialClient?.logo || ""),
      (this.name = partialClient?.name || "");
  }
}
