import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FilterProductPipe } from './filterproduct.pipe';
import { routing } from './app.routing';

import { DisplayNavbarComponent } from './display-navbar/display-navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MensSaleComponent } from './mens-sale/mens-sale.component';
import { SaleItemDetailComponent } from './sale-item-detail/sale-item-detail.component';
import { InfoComponent } from './info/info.component';
import { BrandPageComponent } from './brand-page/brand-page.component';
import { FitPageComponent } from './fit-page/fit-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayNavbarComponent,
    FilterProductPipe,
    MensSaleComponent,
    HomePageComponent,
    InfoComponent,
    SaleItemDetailComponent,
    BrandPageComponent,
    FitPageComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
