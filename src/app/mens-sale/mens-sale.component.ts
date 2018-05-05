import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SaleItem } from './../models/saleitem.model';

@Component({
  selector: 'app-mens-sale',
  templateUrl: './mens-sale.component.html',
  styleUrls: ['./mens-sale.component.css']
})
export class MensSaleComponent {
  saleItems: SaleItem[] = [
    new SaleItem(30796, 159, "LOU SLIM - RAW SELVEDGE", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/lou_slim_pant_main.jpg", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/lou_slim_pant_alt.jpg", "pant", 1),
    new SaleItem(32284, 149,"IGGY SKINNY - PERFECTO", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/iggy_skinny_pant_main.jpg", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/iggy_skinny_pant_alt.jpg", "pant", 0),
    new SaleItem(32851, 69,"NOISE TEE - TEENAGE RIOT", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/noise_tee_main.jpg", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/noise_tee_alt.jpg", "tee", 1),
    new SaleItem(32817, 89,"UNITY TEE - NAVY LINEN STRIPE", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/unity_tee_main.jpg", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/unity_tee_alt.jpg", "tee", 0),
    new SaleItem(32811, 199,"TYPE ONE JACKET - BEATEN INDIGO", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/type_one_jacket_main.jpg", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/type_one_jacket_alt.jpg", "jacket", 1),
    new SaleItem(32769, 649,"RIDER JACKET - BLACK LEATHER", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/rider_jacket_main.jpg", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/rider_jacket_alt.jpg", "jacket", 1),
  ];

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

  goToSaleItemDetail(clickedSaleItem: SaleItem) {
    this.router.navigate(['saleItems'], clickedSaleItem.productId]);
  }
}
