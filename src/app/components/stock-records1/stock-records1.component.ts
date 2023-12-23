import { Component, OnInit } from '@angular/core';
import { IStockDetails } from 'src/app/models/stock.model';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-records1',
  templateUrl: './stock-records1.component.html',
  styleUrls: ['./stock-records1.component.css']
})
export class StockRecords1Component implements OnInit {

  public stock1Records: IStockDetails[];
  public selectBgColor: string;
  constructor(public stockService: StockService) {
    this.stock1Records = [];
    this.selectBgColor = '';
  }

  ngOnInit(): void {
    this.stock1Records = this.stockService.getStocks().slice(0, 3);
  }

}
