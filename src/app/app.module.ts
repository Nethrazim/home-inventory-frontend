import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './welcome/home-inventory-welcome.component';

import { SharedModule } from '@home-inventory-fe/shared';
import { appRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent, 
    HomePageComponent,
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
