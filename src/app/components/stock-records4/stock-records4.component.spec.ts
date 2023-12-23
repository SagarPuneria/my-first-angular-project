import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockRecords4Component } from './stock-records4.component';

describe('StockRecords4Component', () => {
  let component: StockRecords4Component;
  let fixture: ComponentFixture<StockRecords4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockRecords4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockRecords4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
