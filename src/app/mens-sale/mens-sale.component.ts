import { Component, Input } from '@angular/core';
import { SaleItem } from './../models/saleitem.model';

@Component({
  selector: 'app-mens-sale',
  templateUrl: './mens-sale.component.html',
  styleUrls: ['./mens-sale.component.css']
})
export class MensSaleComponent {
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
