import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { identityRoutes } from './identity.routes';
import { RouterModule } from '@angular/router';
import { LoginWrapperComponent } from './components/login-wrapper/login-wrapper.component';
import { SharedModule } from '@home-inventory-fe/shared';

@NgModule({
  declarations: [
    LoginComponent, 
    LoginWrapperComponent
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(identityRoutes),
    SharedModule
    ],
})
export class IdentityModule {}
