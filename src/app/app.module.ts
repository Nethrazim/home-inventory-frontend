import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './welcome/home-inventory-welcome.component';

import { SharedModule } from '@home-inventory-fe/shared';
import { appRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BASE_PATH } from '@home-inventory-fe/backend-library';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, 
    HomePageComponent,
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    SharedModule,
  ],
  bootstrap: [AppComponent],
  providers:[{ provide: BASE_PATH, useValue: 'https://localhost:7195' }]
})
export class AppModule { }
