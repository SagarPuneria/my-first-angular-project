import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, merge } from 'rxjs';
import { INewsResponse } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public http: HttpClient) { }

  public getNewsBycountry(countryCode: string): Observable<INewsResponse> {
    return this.http.get<INewsResponse>(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=eeef35fa74bd474e84b6edaf206414cd`);
  }

  public getMergedNewsData() {
    const apiCall1 = this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=in&apiKey=eeef35fa74bd474e84b6edaf206414cd`)
    const apiCall2 = this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=eeef35fa74bd474e84b6edaf206414cd`)
    const apiCall3 = this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=fr&apiKey=eeef35fa74bd474e84b6edaf206414cd`)
    const apiCall4 = this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=eeef35fa74bd474e84b6edaf206414cd`)
    return merge(apiCall1, apiCall2, apiCall3, apiCall4)
  }
}
