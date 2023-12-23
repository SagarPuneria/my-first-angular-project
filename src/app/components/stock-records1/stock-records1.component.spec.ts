import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockRecords1Component } from './stock-records1.component';

describe('StockRecords1Component', () => {
  let component: StockRecords1Component;
  let fixture: ComponentFixture<StockRecords1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockRecords1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockRecords1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
