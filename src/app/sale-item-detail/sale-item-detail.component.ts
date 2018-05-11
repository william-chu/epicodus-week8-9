import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SaleItem } from './../models/saleitem.model';
import { SaleItemInventoryService } from './../sale-item-inventory.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-sale-item-detail',
  templateUrl: './sale-item-detail.component.html',
  styleUrls: ['./sale-item-detail.component.css'],
  providers: [SaleItemInventoryService]
})
export class SaleItemDetailComponent implements OnInit {
  productId: string;
  saleItemToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private saleItemInventoryService: SaleItemInventoryService
  ) {}

  ngOnInit() {
    console.log(this.route);
    console.log(this.location);
    this.productId = this.route.params['_value']['productId'];
    this.saleItemToDisplay = this.saleItemInventoryService.getSaleItemMensByProductId(this.productId);
    if (typeof this.saleItemToDisplay === "undefined") {
      this.saleItemToDisplay = this.saleItemInventoryService.getSaleItemWomensByProductId(this.productId);
    }
  }

  outOfStock(saleItem) {
    if (this.saleItemToDisplay.inventory === 0) {
      return 'out-of-stock';
    }
  }

}
