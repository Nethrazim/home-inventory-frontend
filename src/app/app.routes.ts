import { Route } from '@angular/router';
import { HomePageComponent } from './welcome/home-inventory-welcome.component';

export const appRoutes: Route[] = [
  {
    path: '',  component: HomePageComponent
  },
  {
    path: 'shared',
    loadChildren: () =>
      import('@home-inventory-fe/shared').then(
        (module) => module.SharedModule
      ),
  },
  {
    path: 'identity',
    loadChildren: () => 
      import('@home-inventory-fe/identity').then(
        (module) => module.IdentityModule
      )
  }
];
