import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInsureComponent } from './user-insure.component';

describe('UserInsureComponent', () => {
  let component: UserInsureComponent;
  let fixture: ComponentFixture<UserInsureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInsureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInsureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
