import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcbCollectionComponent } from './dcb-collection.component';

describe('DcbCollectionComponent', () => {
  let component: DcbCollectionComponent;
  let fixture: ComponentFixture<DcbCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcbCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DcbCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
