import { Component, OnInit } from '@angular/core';
import { INewsArticle, INewsResponse } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-us-news',
  templateUrl: './us-news.component.html',
  styleUrls: ['./us-news.component.css']
})
export class UsNewsComponent implements OnInit {

  public usNewsRecords: INewsArticle[];
  constructor(public indiaNewsService: NewsService) {
    this.usNewsRecords = [];
  }

  public ngOnInit(): void {
    this.indiaNewsService.getNewsBycountry('us').subscribe(
      (data: INewsResponse) => { this.usNewsRecords = data.articles }
    );
  }

}
