import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SaleItem } from './../models/saleitem.model';

@Component({
  selector: 'app-sale-item-detail',
  templateUrl: './sale-item-detail.component.html',
  styleUrls: ['./sale-item-detail.component.css']
})
export class SaleItemDetailComponent implements OnInit {
  productId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.productId = parseInt(urlParameters['productId']);
    });

  }

}
