import { Component } from '@angular/core';
import { IGlobalState } from '../store/global.reducer';
import { Store } from '@ngrx/store';
import { globalActionsGroup } from '../store/global.actions';

@Component({
  selector: 'home-inventory-welcome',
  templateUrl: './home-inventory-welcome.component.html',
  styleUrls: ['./home-inventory-welcome.component.scss'],
})
export class HomePageComponent {
  constructor(private store: Store<IGlobalState>) {}
  onClick() {
    this.store.dispatch(globalActionsGroup.loginSuccess({userId: 100}));
  }
}
