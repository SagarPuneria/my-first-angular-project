import { Component, OnInit } from '@angular/core';
import { INewsArticle, INewsResponse } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-india-news',
  templateUrl: './india-news.component.html',
  styleUrls: ['./india-news.component.css']
})
export class IndiaNewsComponent implements OnInit {

  public indiaNewsRecords: INewsArticle[];
  constructor(public indiaNewsService: NewsService) {
    this.indiaNewsRecords = [];
  }

  public ngOnInit(): void {
    this.indiaNewsService.getNewsBycountry('in').subscribe(
      (data: INewsResponse) => { this.indiaNewsRecords = data.articles }
    );
  }

}