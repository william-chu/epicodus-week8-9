import { Injectable } from '@angular/core';
import { SaleItem } from './models/saleitem.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SaleItemInventoryService {
  saleItemsMens: FirebaseListObservable<any[]>;
  saleItemsWomens: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.saleItemsMens = database.list('SaleItemsMens');
    this.saleItemsWomens = database.list('SaleItemsWomens');
  }

  getSaleItemInventoryMens() {
    return this.saleItemsMens;
  }

  getSaleItemInventoryWomens() {
    return this.saleItemsWomens;
  }

  getSaleItemMensByProductId(saleItemProductId: string) {
    return this.database.object('SaleItemsMens/' + saleItemProductId);
  }

  getSaleItemWomensByProductId(saleItemProductId: string) {
    return this.database.object('SaleItemsWomens/' + saleItemProductId);
  }

}
