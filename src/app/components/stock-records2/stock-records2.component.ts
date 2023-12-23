import { Component, OnInit } from '@angular/core';
import { IStockDetails } from 'src/app/models/stock.model';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-records2',
  templateUrl: './stock-records2.component.html',
  styleUrls: ['./stock-records2.component.css']
})
export class StockRecords2Component implements OnInit {
  public stock2Records: IStockDetails[];
  public searchedStock: string;
  constructor(public stockService: StockService) {
    this.stock2Records = [];
    this.searchedStock = '';
  }

  ngOnInit(): void {
    this.stock2Records = this.stockService.getStocks().slice(4, this.stockService.getStocks().length);
  }

  public addStock(): void {
    this.stock2Records.push({
      id: 6,
      stockName: "Xcom link.",
      stockMarketCap: 24.34,
      stockMSector: "Tech Services",
      releaseDate: "06/07/2021",
      symbol: "XCOM"
    })
  }
}
