import { Route } from '@angular/router';
import { FeatureHomePageWrapperComponent } from './components/feature-home-page-wrapper/feature-home-page-wrapper.component';
import { SpendingsPageWrapperComponent } from './components/spendings-page-wrapper/spendings-page-wrapper.component';
import { HomeStockPageWrapperComponent } from './components/home-stock-page-wrapper/home-stock-page-wrapper.component';

export const featureHomeRoutes: Route[] = [
  {
    path: '', component: FeatureHomePageWrapperComponent, 
    children: [
      {
        path: 'stock', component: HomeStockPageWrapperComponent
      },
      {
        path: 'spendings', component: SpendingsPageWrapperComponent
      }
    ]
  }
];
