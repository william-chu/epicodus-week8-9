import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SaleItemInventoryService } from './../sale-item-inventory.service';
import { SaleItem } from './../models/saleitem.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-mens-sale',
  templateUrl: './mens-sale.component.html',
  styleUrls: ['./mens-sale.component.css'],
  providers: [SaleItemInventoryService]
})
export class MensSaleComponent implements OnInit {
  constructor(private router: Router, private saleItemInventoryService: SaleItemInventoryService) {}

  saleItems: FirebaseListObservable<any[]>;
  filterParameter: string ="all";
  displayColumns: string = "item-display col-4";

  ngOnInit() {
    this.saleItems = this.saleItemInventoryService.getSaleItemInventoryMens();
  }

  setFilterParameter(filterBy) {
    this.filterParameter = filterBy;
  }

  setDisplayColumns(columns) {
    if (columns === 3) {
      this.displayColumns = "item-display col-4";
    }
    else if (columns === 2) {
      this.displayColumns = "item-display col-6"
    }
  }

  outOfStock(saleItem) {
    if (saleItem.inventory === 0) {
      return 'out-of-stock';
    }
  }

  mouseOver(saleItem) {
    saleItem.imgDisplay = saleItem.imgAlt;
  }

  mouseOut(saleItem) {
    saleItem.imgDisplay = saleItem.imgMain;
  }

  goToSaleItemDetail(clickedSaleItem) {
    this.router.navigate(['mens-sale', clickedSaleItem.$key]);
  }
}
