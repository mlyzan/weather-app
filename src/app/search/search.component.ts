import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../state/weather.action';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  value = '';
  constructor(private store: Store) { }

  changeInput(event: any): void {
    this.value = event.target.value;
  }

  showWeather(e: any): void {
    e.preventDefault();
    this.store.dispatch(actions.getWeather({city: this.value}));
    this.value = '';
  }
}
