import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DisplaySaleItemsComponent } from './display-sale-items/display-sale-items.component';
import { DisplayNavbarComponent } from './display-navbar/display-navbar.component';

import { FilterProductPipe } from './filterproduct.pipe';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplaySaleItemsComponent,
    DisplayNavbarComponent,
    FilterProductPipe,
    AddToCartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
