import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcbCollectionSummaryComponent } from './dcb-collection-summary.component';

describe('DcbCollectionSummaryComponent', () => {
  let component: DcbCollectionSummaryComponent;
  let fixture: ComponentFixture<DcbCollectionSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcbCollectionSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DcbCollectionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
