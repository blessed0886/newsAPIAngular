export class Source {

  private id: String;
  private name: String;

  constructor(json: any) {
    this.id = json.id;
    this.name = json.name;
  }
}
