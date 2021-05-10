import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTopComponent } from './display-top.component';

describe('DisplayComponent', () => {
  let component: DisplayTopComponent;
  let fixture: ComponentFixture<DisplayTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
