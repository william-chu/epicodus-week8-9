import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleItemDetailComponent } from './sale-item-detail.component';

describe('SaleItemDetailComponent', () => {
  let component: SaleItemDetailComponent;
  let fixture: ComponentFixture<SaleItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
