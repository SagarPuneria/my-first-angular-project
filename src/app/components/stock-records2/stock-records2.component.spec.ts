import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockRecords2Component } from './stock-records2.component';

describe('StockRecords2Component', () => {
  let component: StockRecords2Component;
  let fixture: ComponentFixture<StockRecords2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockRecords2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockRecords2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
