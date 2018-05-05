import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MensSaleComponent } from './mens-sale/mens-sale.component';
import { SaleItemDetailComponent } from './sale-item-detail/sale-item-detail.component'
import { InfoComponent } from './info/info.component';

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
    path: 'sale-item-detail/:id',
    component: SaleItemDetailComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
