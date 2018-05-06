import { Injectable } from '@angular/core';
import { SaleItem } from './models/saleitem.model';
import { SALEITEMSMENS, SALEITEMSWOMENS } from './sale-item-inventory';

@Injectable()
export class SaleItemInventoryService {

  constructor() { }

  getSaleItemInventoryMens() {
    return SALEITEMSMENS;
  }

  getSaleItemInventoryWomens() {
    return SALEITEMSWOMENS;
  }

  getSaleItemMensByProductId(saleItemProductId: number) {
    for (let i = 0; i < SALEITEMSMENS.length; i++) {
      if(SALEITEMSMENS[i].productId === saleItemProductId) {
        return SALEITEMSMENS[i];
      }
    }
  }

  getSaleItemWomensByProductId(saleItemProductId: number) {
    for (let i = 0; i < SALEITEMSWOMENS.length; i++) {
      if(SALEITEMSWOMENS[i].productId === saleItemProductId) {
        return SALEITEMSWOMENS[i];
      }
    }
  }

}
