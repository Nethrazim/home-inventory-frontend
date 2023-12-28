import { Route } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

export const identityRoutes: Route[] = [
  {
    path: 'login', component: LoginComponent
  },
];
