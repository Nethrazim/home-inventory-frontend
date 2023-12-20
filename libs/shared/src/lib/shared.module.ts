import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HioCardComponent } from './components/hio-card/hio-card.component';
import { RouterModule } from '@angular/router';
import { sharedRoutes } from './shared.routes';

@NgModule({
  imports: [
    RouterModule.forChild(sharedRoutes),
    CommonModule
  ],
  declarations: [HioCardComponent],
  exports: [HioCardComponent]
})
export class SharedModule {}
