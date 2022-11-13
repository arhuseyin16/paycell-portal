import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcbTransactionSummaryComponent } from './dcb-transaction-summary.component';

describe('DcbTransactionSummaryComponent', () => {
  let component: DcbTransactionSummaryComponent;
  let fixture: ComponentFixture<DcbTransactionSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcbTransactionSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DcbTransactionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
