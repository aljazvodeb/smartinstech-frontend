import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceStatusComponent } from './insurance-status.component';

describe('InsuranceStatusComponent', () => {
  let component: InsuranceStatusComponent;
  let fixture: ComponentFixture<InsuranceStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
