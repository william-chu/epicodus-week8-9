import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SaleItemInventoryService } from './../sale-item-inventory.service';
import { SaleItem } from './../models/saleitem.model';


@Component({
  selector: 'app-mens-sale',
  templateUrl: './mens-sale.component.html',
  styleUrls: ['./mens-sale.component.css'],
  providers: [SaleItemInventoryService]
})
export class MensSaleComponent {

  constructor(private router: Router, private saleItemInventoryService: SaleItemInventoryService) {}

  saleItems: SaleItem[];

  filterParameter: string ="all";
  setFilterParameter(filterBy) {
    this.filterParameter = filterBy;
  }

  outOfStock(saleItem) {
    if (saleItem.inventory === 0) {
      return 'out-of-stock';
    }
  }

  mouseOver(saleItem) {
    saleItem.displayImage = saleItem.imgAlt;
  }

  mouseOut(saleItem) {
    saleItem.displayImage = saleItem.imgMain;
  }

  goToSaleItemDetail(clickedSaleItem: SaleItem) {
    this.router.navigate(['mens-sale', clickedSaleItem.productId]);
  }
}
