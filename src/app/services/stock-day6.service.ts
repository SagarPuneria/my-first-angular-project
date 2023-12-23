import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStockDetails } from '../models/stock.model';
import { Observable, filter, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockDay6Service {

  constructor(public httpClientService: HttpClient) { }

  /* public getStocks(): IStockDetails[] {
    return [ */
  public getStocks(): Observable<IStockDetails[]> {
    return of([
      {
        id: 11,
        stockName: 'BioScrip, Inc.',
        stockMarketCap: 306.888888888888809,
        stockMSector: 'Health Care',
        releaseDate: '01/06/2021',
        symbol: 'BIOS',
      },
      {
        id: 22,
        stockName: 'RiceBran Technologies',
        stockMarketCap: 9.62,
        stockMSector: 'Consumer Non-Durables',
        releaseDate: '11/05/2021',
        symbol: 'RIBT',
      },
      {
        id: 33,
        stockName: 'John Hancock Investors Trust',
        stockMarketCap: 152.46,
        stockMSector: 'Health Care',
        releaseDate: '12/05/2021',
        symbol: 'JHI',
      },
      {
        id: 44,
        stockName: 'Yatra Online, Inc.',
        stockMarketCap: 398.74,
        stockMSector: 'Consumer Services',
        releaseDate: '10/03/2021',
        symbol: 'YTRA',
      },
      {
        id: 6,
        stockName: 'Restaurant2 Brands International Inc.',
        stockMarketCap: 14.34,
        stockMSector: 'Consumer Services',
        releaseDate: '06/07/2021',
        symbol: 'SRQ',
      },
    ])
    /* .pipe(
      filter(
        (stock: IStockDetails[]) => {
          console.log('pipe stock', stock);
          // stock.stockMarketCap > 100
        }
      )
    ); */
    // ];
  }

  public getStockNumber(): Observable<number> {
    return of(10, 20, 30);
  }

  // public getStockFromOperator(): Observable<number> {
  public getStockFromOperator(): Observable<IStockDetails> {
    // return from([10, 20, 30]);
    return from([
      {
        id: 11,
        stockName: 'BioScrip, Inc.',
        stockMarketCap: 306.888888888888809,
        stockMSector: 'Health Care',
        releaseDate: '01/06/2021',
        symbol: 'BIOS',
      },
      {
        id: 22,
        stockName: 'RiceBran Technologies',
        stockMarketCap: 9.62,
        stockMSector: 'Consumer Non-Durables',
        releaseDate: '11/05/2021',
        symbol: 'RIBT',
      },
      {
        id: 33,
        stockName: 'John Hancock Investors Trust',
        stockMarketCap: 152.46,
        stockMSector: 'Health Care',
        releaseDate: '12/05/2021',
        symbol: 'JHI',
      },
      {
        id: 44,
        stockName: 'Yatra Online, Inc.',
        stockMarketCap: 398.74,
        stockMSector: 'Consumer Services',
        releaseDate: '10/03/2021',
        symbol: 'YTRA',
      },
      {
        id: 6,
        stockName: 'Restaurant2 Brands International Inc.',
        stockMarketCap: 14.34,
        stockMSector: 'Consumer Services',
        releaseDate: '06/07/2021',
        symbol: 'SRQ',
      },
    ]).pipe(
      filter((stock: IStockDetails) => stock.stockMarketCap > 100)
    );
  }
}
