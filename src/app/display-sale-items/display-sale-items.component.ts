import { Component, Input } from '@angular/core';
import { SaleItem } from './../models/saleitem.model';

@Component({
  selector: 'app-display-sale-items',
  templateUrl: './display-sale-items.component.html',
  styleUrls: ['./display-sale-items.component.css']
})
export class DisplaySaleItemsComponent {
  @Input() childSaleItems: SaleItem[];

  filterSaleItems: string ="all";
  onChange(filterBy) {
    this.filterSaleItems = filterBy;
  }

  outOfStock(saleItem) {
    if (saleItem.inventory === 0) {
      return 'out-of-stock';
    }
  }

  mouseOut(saleItem) {
    saleItem.displayImage = saleItem.imgMain;
  }
  
  mouseOver(saleItem) {
    saleItem.displayImage = saleItem.imgAlt;
  }
}
