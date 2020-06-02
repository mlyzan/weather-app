import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectWeather, selectLoader, selectNextDays } from './../state/weather.selectos';
import * as actions from '../state/weather.action';

@Component({
  selector: 'app-city-block',
  templateUrl: './city-block.component.html',
  styleUrls: ['./city-block.component.scss']
})
export class CityBlockComponent implements OnInit, OnDestroy{
  data$: Observable<any>;
  nextDays$: Observable<any>;
  loader$: Observable<boolean>;
  weather$: any;
  subscribes: Subscription[] = [];
  constructor(private readonly store: Store) { }

  ngOnInit(): void {
      this.loader$ = this.store.select(selectLoader);

      this.store.dispatch(actions.getLocation({}));

      this.data$ = this.store.select(selectWeather);

      this.nextDays$ = this.store.select(selectNextDays);
  }

  ngOnDestroy(): void {
    this.subscribes.forEach(e=> e.unsubscribe());
  }
}
