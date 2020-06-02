import { createSelector, createFeatureSelector } from '@ngrx/store';
import {StateModel} from './weather.reducer';

export const WEATHER_KEY = 'weather';

export const selectState = createFeatureSelector<StateModel>(WEATHER_KEY);

export const selectWeather = createSelector(selectState, state => state.weather);
export const selectLoader = createSelector(selectState, state => state.loader);
export const selectLocation = createSelector(selectState, state => state.location);
export const selectNextDays = createSelector(selectState, state => state.nextDays);