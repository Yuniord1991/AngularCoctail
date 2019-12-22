import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeBeginnerComponent } from './welcome-beginner.component';

describe('WelcomeBeginnerComponent', () => {
  let component: WelcomeBeginnerComponent;
  let fixture: ComponentFixture<WelcomeBeginnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeBeginnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeBeginnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
