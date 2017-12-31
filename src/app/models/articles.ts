import { Source } from './source';


export class Articles {

  private _source: Source;
  private _author: String;
  private _title: String;
  private _description: String;
  private _url: URL;
  private _urlToImage: String;
  private _publishedAt: String;

  constructor(json: any) {
    this._source = json.source;
    this._author = json._author;
    this._title = json.title;
    this._description = json.description;
    this._url = json.url;
    this._urlToImage = json._urlToImage;
    this._publishedAt = json._publishedAt;
  }

  get source(): Source {
    return this._source;
  }

  get author(): String {
    return this._author;
  }

  get title(): String {
    return this._title;
  }

  get description(): String {
    return this._description;
  }

  get url(): URL {
    return this._url;
  }

  get urlToImage(): String {
    return this._urlToImage;
  }

  get publishedAt(): String {
    return this._publishedAt;
  }

  toString = (): String => {
    const toReturn: string = 'Source: ' + this.source + '/n' +
    'Aurth: ' + this.author + '/n' +
    'Title: ' + this.title + '/n' +
    'Description: ' + this.description + '/n' +
    'URL: ' + this.url + '/n' +
    'Published at: ' + this.publishedAt;
    return null;
  }
}
