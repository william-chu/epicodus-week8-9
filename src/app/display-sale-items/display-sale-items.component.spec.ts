import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySaleItemsComponent } from './display-sale-items.component';

describe('DisplaySaleItemsComponent', () => {
  let component: DisplaySaleItemsComponent;
  let fixture: ComponentFixture<DisplaySaleItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySaleItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySaleItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
