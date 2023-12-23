import { Component, Input, OnInit } from '@angular/core';
import { INewsArticle, INewsResponse } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input() public title: string;
  @Input() public countryCode: string;
  @Input('headerStyle') public headerStyle: string;
  @Input('bgStyle') public bgStyle: string;

  public newsRecords: INewsArticle[];
  constructor(public newsService: NewsService) {
    this.newsRecords = [];
    this.title = '';
    this.countryCode = '';
    this.headerStyle = '';
    this.bgStyle = '';
  }

  public ngOnInit(): void {
    /* this.newsService.getNewsBycountry(this.countryCode).subscribe(
      (data: INewsResponse) => { this.newsRecords = data.articles }
    ); */
    this.newsService.getMergedNewsData().subscribe(
      (data: INewsResponse) => {
        this.newsRecords = data.articles;
        console.log('getMergedNewsData:', data);
      }
      // (data: INewsResponse) => { console.log('getMergedNewsData:', data); }
    );
  }

}
