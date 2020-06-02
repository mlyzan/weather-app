import { createAction, props } from '@ngrx/store';

export const getWeather = createAction(
  '[Weather] get weather',
  props<{city: string}>()
);

export const getWeatherSuccess = createAction(
    '[Weather] get weather success',
    props<{weather: any}>()    
);

export const getWeatherFail = createAction(
    '[Weather] get weather fail',
    props<{error: Error}>()
);

export const getLocation = createAction(
  '[Wether] get weather location',
  props<{}>()
);

export const getLocationSuccess = createAction(
  '[Wether] get weather location success',
  props<{location: object}>()
);

export const getWeatherById= createAction(
  '[Weather] get weather by id',
  props<{id: string}>()
);

export const getWeatherByIdSuccess = createAction(
  '[Weather] get weather by id success',
  props<{weather: object}>()
);

export const getNextDays = createAction(
  '[Weather] get next days',
  props<{list: Array<any>}>()
);