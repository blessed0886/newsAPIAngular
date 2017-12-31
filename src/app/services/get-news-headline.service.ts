import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { News } from '../models/news';

@Injectable()
export class GetNewsHeadlineService {

  private url: string = 'http://localhost:8080/news/';

  constructor(private http: Http) { }

  getABCHeadline(): Observable<any> {
    return this.http.get(this.url + 'abc').map(news => {
      return new News(news).articles.toString();
    });
  }

  getCBSHeadline(): Observable<any> {
    return this.http.get(this.url + 'cbs').map(news => {
      return new News(news).articles.toString();
    });
  }

}
