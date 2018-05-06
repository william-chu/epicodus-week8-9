import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitPageComponent } from './fit-page.component';

describe('FitPageComponent', () => {
  let component: FitPageComponent;
  let fixture: ComponentFixture<FitPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
