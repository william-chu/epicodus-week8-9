import { Injectable } from '@angular/core';
import { SaleItem } from './models/saleitem.model';
import { SALEITEMSMENS, SALEITEMSWOMENS } from './sale-item-inventory';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SaleItemInventoryService {
  saleItemsMens: FirebaseListObservable<any[]>;
  saleItemsWomens: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.saleItemsMens = database.list('SALEITEMSMENS');
    this.saleItemsWomens = database.list('SALEITEMSWOMENS');
  }

  getSaleItemInventoryMens() {
    return this.saleItemsMens;
  }

  getSaleItemInventoryWomens() {
    return this.saleItemsWomens;
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
