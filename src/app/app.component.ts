import { Component } from '@angular/core';
import { IGlobalState } from './store/global.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'hio-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'home-inventory-fe';

  userId$! : Observable<number>;
  constructor(private store: Store<IGlobalState>){}

  
}
