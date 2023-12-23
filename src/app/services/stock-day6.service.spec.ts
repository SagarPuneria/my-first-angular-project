import { TestBed } from '@angular/core/testing';

import { StockDay6Service } from './stock-day6.service';

describe('StockDay6Service', () => {
  let service: StockDay6Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockDay6Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
