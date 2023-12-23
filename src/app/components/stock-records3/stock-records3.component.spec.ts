import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockRecords3Component } from './stock-records3.component';

describe('StockRecords3Component', () => {
  let component: StockRecords3Component;
  let fixture: ComponentFixture<StockRecords3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockRecords3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockRecords3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
