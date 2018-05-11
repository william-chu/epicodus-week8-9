import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SaleItemInventoryService } from './../sale-item-inventory.service';
import { SaleItem } from './../models/saleitem.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-womens-sale',
  templateUrl: './womens-sale.component.html',
  styleUrls: ['./womens-sale.component.css'],
  providers: [SaleItemInventoryService]
})
export class WomensSaleComponent implements OnInit {
  constructor(private router: Router, private saleItemInventoryService: SaleItemInventoryService) {}

  saleItems: FirebaseListObservable<any[]>;

  ngOnInit() {
    this.saleItems = this.saleItemInventoryService.getSaleItemInventoryWomens();
  }

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

  goToSaleItemDetail(clickedSaleItem) {
    this.router.navigate(['womens-sale', clickedSaleItem.$key]);
  }
}
