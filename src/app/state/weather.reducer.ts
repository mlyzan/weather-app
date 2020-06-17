import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './weather.action';

export const weatherFeatureKey = 'weather';

export interface StateModel {
    weather: object;
    loader: boolean;
    error: Error;
    location: object;
    nextDays: Array<any>;
};

export const initialState: StateModel = {
    weather: {},
    loader: false,
    error: null,
    location: {},
    nextDays: []
};

export const weatherReducer = createReducer(
    initialState,
    on(actions.getWeather, (state) => ({...state, loader: true })),
    on(actions.getWeatherSuccess, (state, weather) => ({...state, loader: false, weather, error: null})),
    on(actions.getWeatherFail, (state, {error}) => ({...state, loader: false, error})),
    on(actions.getLocation, (state) => ({...state, loader: true})),
    on(actions.getLocationSuccess, (state, location) => ({...state, location})),
    on(actions.getWeatherByIdSuccess, (state, weather) => ({...state, weather, loader: false, error: null})),
    on(actions.getNextDays, (state, {list}) => {
        let nextDays = [];
            list.forEach(e => {
                if (e.dt_txt.indexOf('15:00:00') >= 0) {
                nextDays.push(e)
                }
            });
        return {
            ...state, nextDays
        }
    })
);

export function reducer(state: StateModel | undefined, action: Action) {
    return weatherReducer(state, action);
};