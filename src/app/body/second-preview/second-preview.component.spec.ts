import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPreviewComponent } from './second-preview.component';

describe('SecondPreviewComponent', () => {
  let component: SecondPreviewComponent;
  let fixture: ComponentFixture<SecondPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
