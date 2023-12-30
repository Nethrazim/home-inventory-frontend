import { Route } from '@angular/router';
import { LoginWrapperComponent } from './components/login-wrapper/login-wrapper.component';
import { SubscribeWrapperComponent } from './components/subscribe-wrapper/subscribe-wrapper.component';

export const identityRoutes: Route[] = [
  {
    path: 'login', component: LoginWrapperComponent
  },
  {
    path: 'subscribe', component: SubscribeWrapperComponent
  }
];
