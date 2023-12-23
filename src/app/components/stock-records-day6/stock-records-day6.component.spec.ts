import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockRecordsDay6Component } from './stock-records-day6.component';

describe('StockRecordsDay6Component', () => {
  let component: StockRecordsDay6Component;
  let fixture: ComponentFixture<StockRecordsDay6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockRecordsDay6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockRecordsDay6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
