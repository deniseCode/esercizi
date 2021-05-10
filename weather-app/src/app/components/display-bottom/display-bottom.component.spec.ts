import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBottomComponent } from './display-bottom.component';

describe('DisplayBottomComponent', () => {
  let component: DisplayBottomComponent;
  let fixture: ComponentFixture<DisplayBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
