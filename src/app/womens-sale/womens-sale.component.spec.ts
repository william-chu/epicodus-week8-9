import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensSaleComponent } from './womens-sale.component';

describe('WomensSaleComponent', () => {
  let component: WomensSaleComponent;
  let fixture: ComponentFixture<WomensSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomensSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
