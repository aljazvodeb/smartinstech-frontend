import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceConclusionComponent } from './insurance-conclusion.component';

describe('InsuranceConclusionComponent', () => {
  let component: InsuranceConclusionComponent;
  let fixture: ComponentFixture<InsuranceConclusionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceConclusionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceConclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
