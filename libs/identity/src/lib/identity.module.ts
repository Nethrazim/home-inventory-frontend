import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { identityRoutes } from './identity.routes';
import { RouterModule } from '@angular/router';
import { LoginWrapperComponent } from './components/login-wrapper/login-wrapper.component';
import { SharedModule } from '@home-inventory-fe/shared';
import { SubscribeWrapperComponent } from './components/subscribe-wrapper/subscribe-wrapper.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { AccountService } from '@home-inventory-fe/backend-library';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    LoginComponent,
    LoginWrapperComponent,
    SubscribeComponent,
    SubscribeWrapperComponent,
  ],
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(identityRoutes), 
    SharedModule
  ],
  providers: [
    HttpClient,
    AccountService,
    StoreModule
  ]
})
export class IdentityModule {}
