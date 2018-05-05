import { Injectable } from '@angular/core';
import { SaleItem } from './models/saleitem.model';
import { SALEITEMS } from './sale-item-inventory';

@Injectable()
export class SaleItemInventoryService {

  constructor() { }

  getSaleItemInventory() {
    return SALEITEMS;
  }

}
