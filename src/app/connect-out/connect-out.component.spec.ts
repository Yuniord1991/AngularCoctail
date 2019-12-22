import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectOutComponent } from './connect-out.component';

describe('ConnectOutComponent', () => {
  let component: ConnectOutComponent;
  let fixture: ComponentFixture<ConnectOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
