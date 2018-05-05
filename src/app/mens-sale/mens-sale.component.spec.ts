import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensSaleComponent } from './mens-sale.component';

describe('MensSaleComponent', () => {
  let component: MensSaleComponent;
  let fixture: ComponentFixture<MensSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
