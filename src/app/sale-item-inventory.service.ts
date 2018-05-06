import { Injectable } from '@angular/core';
import { SaleItem } from './models/saleitem.model';
import { SALEITEMS } from './sale-item-inventory';

@Injectable()
export class SaleItemInventoryService {

  constructor() { }

  getSaleItemInventory() {
    return SALEITEMS;
  }

  getSaleItemByProductId(saleItemProductId: number) {
    for (let i = 0; i < SALEITEMS.length; i++) {
      if(SALEITEMS[i].productId === saleItemProductId) {
        return SALEITEMS[i];
      }
    }
  }

}
