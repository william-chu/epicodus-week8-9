import { Component, Input } from '@angular/core';
import { SaleItem } from './../models/saleitem.model';

@Component({
  selector: 'app-display-sale-items',
  templateUrl: './display-sale-items.component.html',
  styleUrls: ['./display-sale-items.component.css']
})
export class DisplaySaleItemsComponent {
  @Input() childSaleItems: SaleItem[];

  outOfStock(saleItem) {
    if (saleItem.inventory === 0) {
      return 'item-display out-of-stock';
    } else {
      return 'item-display'
    }
  }

  filterSaleItems: string ="all";
  onChange(filterBy) {
    this.filterSaleItems = filterBy;
  }
}
