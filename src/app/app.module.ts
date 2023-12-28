import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './welcome/home-inventory-welcome.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

import { SharedModule } from '@home-inventory-fe/shared';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent, 
    HomePageComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, 
    CommonModule,
    RouterModule.forRoot(appRoutes),
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
