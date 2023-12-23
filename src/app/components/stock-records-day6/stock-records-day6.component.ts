import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { IStockDetails } from 'src/app/models/stock.model';
import { StockDay6Service } from 'src/app/services/stock-day6.service';

@Component({
  selector: 'app-stock-records-day6',
  templateUrl: './stock-records-day6.component.html',
  styleUrls: ['./stock-records-day6.component.css']
})
export class StockRecordsDay6Component implements OnInit, OnDestroy {

  public stockRecords: IStockDetails[];
  public stockRecords2: IStockDetails;

  public timerSubscription: Subscription;
  public stockSubscription: Subscription;

  constructor(public stockService: StockDay6Service) {
    this.stockRecords = [];
    this.stockRecords2 = {} as IStockDetails;
    this.timerSubscription = {} as Subscription;
    this.stockSubscription = {} as Subscription;
  }

  public ngOnInit(): void {
    // this.stockRecords=this.stockService.getStocks();
    this.stockService.getStocks().subscribe(
      (data: IStockDetails[]) => {
        this.stockRecords = data;
        console.log(data);
      },
      error => console.error('$$$' + error),
      () => console.log('Observable completed')
    );

    this.stockService.getStockNumber().subscribe(
      (data: number) => {
        console.log(data);
      },
      error => console.error('error=>', error),
      () => console.log('getStockNumber Observable completed')
    );

    /* this.stockSubscription = this.stockService.getStockFromOperator().subscribe(
      (data: IStockDetails) => {
        this.stockRecords2 = data;
        this.stockRecords.push(data);
        console.log('stockRecords2:', this.stockRecords2);
        console.log('stockRecords:', this.stockRecords);
      },
      error => console.error('$$$' + error),
      () => console.log('Observable completed')
    ); */
  }

  public StartTimer() {
    const timerInterval = interval(2000);
    this.timerSubscription = timerInterval.subscribe(
      (value: number) => {
        console.log('timerSubscription:', value)
      })
  }

  // programatically you can unsubscribe
  public StopTimer() {
    this.timerSubscription.unsubscribe();
  }

  // mandatory to unsubscribe as a best practice to avoid memory leaks
  public ngOnDestroy(): void {
    this.stockSubscription.unsubscribe();
    this.timerSubscription.unsubscribe();
  }

}
