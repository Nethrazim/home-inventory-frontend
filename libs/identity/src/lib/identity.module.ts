import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { identityRoutes } from './identity.routes';
import { RouterModule } from '@angular/router';
import { LoginWrapperComponent } from './components/login-wrapper/login-wrapper.component';
import { SharedModule } from '@home-inventory-fe/shared';
import { SubscribeWrapperComponent } from './components/subscribe-wrapper/subscribe-wrapper.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoginWrapperComponent,
    SubscribeComponent,
    SubscribeWrapperComponent,
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(identityRoutes), 
    SharedModule],
})
export class IdentityModule {}
