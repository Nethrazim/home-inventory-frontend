import { NgModule } from '@angular/core';
import { MaterialModule } from '@home-inventory-fe/material';
import { HioCardComponent } from './components/hio-card/hio-card.component';
import { HioMenuCardComponent } from './components/hio-menu-card/hio-menu-card.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    HioCardComponent,
    HioMenuCardComponent],
  exports: [
    MaterialModule,
    HioCardComponent, 
    HioMenuCardComponent
  ]
})
export class SharedModule {}
