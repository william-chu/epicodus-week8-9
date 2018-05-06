import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MensSaleComponent } from './mens-sale/mens-sale.component';
import { WomensSaleComponent } from './womens-sale/womens-sale.component';
import { SaleItemDetailComponent } from './sale-item-detail/sale-item-detail.component';
import { BrandPageComponent } from './brand-page/brand-page.component';
import { FitPageComponent } from './fit-page/fit-page.component';
import { InfoPageComponent } from './info-page/info-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'mens-sale',
    component: MensSaleComponent
  },
  {
    path: 'mens-sale/:productId',
    component: SaleItemDetailComponent
  },
  {
    path: 'womens-sale',
    component: WomensSaleComponent
  },
  {
    path: 'brand',
    component: BrandPageComponent
  },
  {
    path: 'fit',
    component: FitPageComponent
  },
  {
    path: 'info',
    component: InfoPageComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
