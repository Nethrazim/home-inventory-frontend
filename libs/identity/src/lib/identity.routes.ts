import { Route } from '@angular/router';
import { LoginWrapperComponent } from './components/login-wrapper/login-wrapper.component';

export const identityRoutes: Route[] = [
  {
    path: 'login', component: LoginWrapperComponent
  },
];
