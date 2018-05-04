import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayNavbarComponent } from './display-navbar.component';

describe('DisplayNavbarComponent', () => {
  let component: DisplayNavbarComponent;
  let fixture: ComponentFixture<DisplayNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
