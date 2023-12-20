import { Route } from '@angular/router';
import { HioCardComponent } from './components/hio-card/hio-card.component';

export const sharedRoutes: Route[] = [
  {
    path: '', component: HioCardComponent
  },
];
