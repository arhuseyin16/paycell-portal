import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcaInlineUserComponent } from './orca-inline-user.component';

describe('UserrComponent', () => {
  let component: OrcaInlineUserComponent;
  let fixture: ComponentFixture<OrcaInlineUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrcaInlineUserComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcaInlineUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
