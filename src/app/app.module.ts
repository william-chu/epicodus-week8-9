import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DisplaySaleItemsComponent } from './display-sale-items/display-sale-items.component';
import { DisplayNavbarComponent } from './display-navbar/display-navbar.component';

import { FilterProductPipe } from './filterproduct.pipe';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { MensSaleComponent } from './mens-sale/mens-sale.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InfoComponent } from './info/info.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    DisplaySaleItemsComponent,
    DisplayNavbarComponent,
    FilterProductPipe,
    AddToCartComponent,
    MensSaleComponent,
    HomePageComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
