import { Component, OnInit } from '@angular/core';
import { IStockDetails } from 'src/app/models/stock.model';

@Component({
  selector: 'app-stock-records',
  templateUrl: './stock-records.component.html',
  styleUrls: ['./stock-records.component.css']
})
export class StockRecordsComponent implements OnInit {

  public stockRecords: IStockDetails[];
  public stockDefaultColor: string;
  public bgColorSelection: string;
  constructor() {
    this.stockRecords = [];
    this.stockDefaultColor = ''
    this.bgColorSelection = ''
  }

  ngOnInit(): void {
    this.stockRecords = [
      {
        id: 1,
        stockName: 'BioScrip, Inc.',
        stockMarketCap: 306.888888888888809,
        stockMSector: 'Health Care',
        releaseDate: '01/06/2021',
        symbol: 'BIOS',
      },
      {
        id: 2,
        stockName: 'RiceBran Technologies',
        stockMarketCap: 9.62,
        stockMSector: 'Consumer Non-Durables',
        releaseDate: '11/05/2021',
        symbol: 'RIBT',
      },
      {
        id: 3,
        stockName: 'John Hancock Investors Trust',
        stockMarketCap: 152.46,
        stockMSector: 'Health Care',
        releaseDate: '12/05/2021',
        symbol: 'JHI',
      },
      {
        id: 4,
        stockName: 'Yatra Online, Inc.',
        stockMarketCap: 398.74,
        stockMSector: 'Consumer Services',
        releaseDate: '10/03/2021',
        symbol: 'YTRA',
      },
      {
        id: 5,
        stockName: 'Restaurant Brands International Inc.',
        stockMarketCap: 14.34,
        stockMSector: 'Consumer Services',
        releaseDate: '06/07/2021',
        symbol: 'QSR',
      },
    ];
  }

}
