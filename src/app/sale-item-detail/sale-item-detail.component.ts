import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SaleItem } from './../models/saleitem.model';
import { SaleItemInventoryService } from './../sale-item-inventory.service';

@Component({
  selector: 'app-sale-item-detail',
  templateUrl: './sale-item-detail.component.html',
  styleUrls: ['./sale-item-detail.component.css'],
  providers: [SaleItemInventoryService]
})
export class SaleItemDetailComponent implements OnInit {
  productId: number = null;
  saleItemToDisplay: SaleItem;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private saleItemInventoryService: SaleItemInventoryService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.productId = parseInt(urlParameters['productId']);
    });
    this.saleItemToDisplay = this.saleItemInventoryService.getSaleItemMensByProductId(this.productId);
  }

  outOfStock(saleItem) {
    if (this.saleItemToDisplay.inventory === 0) {
      return 'out-of-stock';
    }
  }

}
