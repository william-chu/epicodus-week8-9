import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MensSaleComponent } from './mens-sale/mens-sale.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'mens-sale',
    component: MensSaleComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
