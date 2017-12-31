import { Articles } from './articles';

export class News {

  private _status: String;
  private _totalResults: number;
  private _articles: Articles[];


  constructor(json: any) {
    this._status = json.status;
    this._totalResults = json._totalResults;
    this._articles = json._articles;
  }


  get status(): String {
    return this._status;
  }

  get totalResults(): number {
    return this._totalResults;
  }

  get articles(): Articles[] {
    return this._articles;
  }
}
