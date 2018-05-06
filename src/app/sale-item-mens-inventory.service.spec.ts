import { TestBed, inject } from '@angular/core/testing';

import { SaleItemInventoryService } from './sale-item-inventory.service';

describe('SaleItemInventoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaleItemInventoryService]
    });
  });

  it('should be created', inject([SaleItemInventoryService], (service: SaleItemInventoryService) => {
    expect(service).toBeTruthy();
  }));
});
