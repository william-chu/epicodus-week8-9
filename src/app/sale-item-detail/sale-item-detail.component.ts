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
  productPath: string;
  saleItemToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private saleItemInventoryService: SaleItemInventoryService
  ) {}

  ngOnInit() {
    this.productId = this.route.params['_value']['productId'];
    this.productPath = this.route.url['_value'][0]['path'];
    if (this.productPath === "mens-sale") {
      this.saleItemToDisplay = this.saleItemInventoryService.getSaleItemMensByProductId(this.productId);
    }
    else if (this.productPath === "womens-sale") {
      this.saleItemToDisplay = this.saleItemInventoryService.getSaleItemWomensByProductId(this.productId);
    }
  }

}
