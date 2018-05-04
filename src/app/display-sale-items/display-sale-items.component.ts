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
}
