import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcbHomeComponent } from './dcb-home.component';

describe('DcbHomeComponent', () => {
  let component: DcbHomeComponent;
  let fixture: ComponentFixture<DcbHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcbHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DcbHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
