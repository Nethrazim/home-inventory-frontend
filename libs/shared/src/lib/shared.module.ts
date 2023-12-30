import { NgModule } from '@angular/core';
import { MaterialModule } from '@home-inventory-fe/material';
import { HioCardComponent } from './components/hio-card/hio-card.component';
import { HioMenuCardComponent } from './components/hio-menu-card/hio-menu-card.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainTemplateComponent } from './components/main-template/main-template.component';
import { LoginTemplateComponent } from './components/login-template/login-template.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  declarations: [
    HioCardComponent,
    HioMenuCardComponent,
    NavbarComponent,
    MainTemplateComponent,
    LoginTemplateComponent],
  exports: [
    MaterialModule,
    HioCardComponent, 
    HioMenuCardComponent,
    NavbarComponent,
    MainTemplateComponent,
    LoginTemplateComponent
  ]
})
export class SharedModule {}
