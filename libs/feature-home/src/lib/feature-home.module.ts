import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { featureHomeRoutes } from './feature-home.routes';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@home-inventory-fe/shared';
import { FeatureHomePageWrapperComponent } from './components/feature-home-page-wrapper/feature-home-page-wrapper.component';
import { SpendingsPageWrapperComponent } from './components/spendings-page-wrapper/spendings-page-wrapper.component';
import { HomeStockPageWrapperComponent } from './components/home-stock-page-wrapper/home-stock-page-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(featureHomeRoutes),
    SharedModule
  ],
  declarations: [
    SideMenuComponent,
    FeatureHomePageWrapperComponent,
    SpendingsPageWrapperComponent,
    HomeStockPageWrapperComponent,
  ],
})
export class FeatureHomeModule {}
