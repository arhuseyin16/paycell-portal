import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcbTransactionComponent } from './dcb-transaction.component';

describe('DcbTransactionComponent', () => {
  let component: DcbTransactionComponent;
  let fixture: ComponentFixture<DcbTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcbTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DcbTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
