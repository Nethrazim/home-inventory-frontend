import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IGlobalState } from '../../../../../../src/app/store/global.reducer';
import { Observable } from 'rxjs';
@Component({
  selector: 'hio-home-stock-page-wrapper',
  templateUrl: './home-stock-page-wrapper.component.html',
  styleUrl: './home-stock-page-wrapper.component.scss',
})
export class HomeStockPageWrapperComponent {

  constructor(private store: Store<IGlobalState>) {

  }

  userId$!: Observable<number>;

  ngOnInit()
  {
    this.userId$ = this.store.select((store) => store.userId);
  }
}
