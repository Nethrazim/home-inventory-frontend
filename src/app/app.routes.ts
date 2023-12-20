import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'shared',
    loadChildren: () =>
      import('@home-inventory-fe/shared').then(
        (module) => module.SharedModule
      ),
  },
];
