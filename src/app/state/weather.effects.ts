import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { WeatherService } from '../service/weather-today.service';
import * as actions from './weather.action';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable()
export class WeatherEffects {

  loadWeather$ = createEffect(() => this.actions$.pipe(
    ofType(actions.getWeather),
    mergeMap(({city}) => this.weatherService.getWeatherByCity(city)
      .pipe(
        map(res => {
          this.store.dispatch(actions.getNextDays({list: res.list}));
          return actions.getWeatherSuccess(res)
        }),
        catchError((error) => of(actions.getWeatherFail(error)) )
      ))
    )
  );

  loadLocation$ = createEffect(() => this.actions$.pipe(
    ofType(actions.getLocation),
    mergeMap(() => this.weatherService.getLocation()
      .pipe(
        map(res => {
          this.store.dispatch(actions.getWeatherById({id: res.city}));
          return actions.getLocationSuccess(res)
        })
      )
    )
  ));

  loadWeatherById$ = createEffect(() => this.actions$.pipe(
    ofType(actions.getWeatherById),
    mergeMap(({id}) => this.weatherService.getWeatherById(id)
      .pipe(
        map(res => {
          this.store.dispatch(actions.getNextDays({list: res.list}));
          return actions.getWeatherByIdSuccess(res)
        }),
        catchError((error) => of(actions.getWeatherFail(error)) )
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService,
    private store: Store
    ) {}
}