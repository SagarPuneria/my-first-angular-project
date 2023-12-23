import { Pipe, PipeTransform } from '@angular/core';
import { IStockDetails } from '../models/stock.model';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(stocks: IStockDetails[], searchedStockName: string): IStockDetails[] {
    if (stocks.length === 0 || searchedStockName === '') {
      return stocks;
    }
    const result: IStockDetails[] = [];
    for (const stock of stocks) {
      if (stock.stockName.toLocaleLowerCase().match(searchedStockName.toLocaleLowerCase())) {
        result.push(stock);
      }
    }
    return result;
  }

}
