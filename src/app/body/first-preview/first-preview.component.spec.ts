import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPreviewComponent } from './first-preview.component';

describe('FirstPreviewComponent', () => {
  let component: FirstPreviewComponent;
  let fixture: ComponentFixture<FirstPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
