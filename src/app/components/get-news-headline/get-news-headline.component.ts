import { Component, OnInit } from '@angular/core';
import { GetNewsHeadlineService } from '../../services/get-news-headline.service'

@Component({
  selector: 'app-get-news-headline',
  templateUrl: './get-news-headline.component.html',
  styleUrls: ['./get-news-headline.component.css']
})
export class GetNewsHeadlineComponent implements OnInit {

  constructor(private newsService: GetNewsHeadlineService) { }

  getABCHeadline() {
    return this.newsService.getABCHeadline();
  }

  getCBSHeadline() {
    return this.newsService.getCBSHeadline();
  }

  ngOnInit() {
  }

}
