import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CityBlockComponent } from './city-block/city-block.component';
import { SearchComponent } from './search/search.component';
import { NextDayComponent } from './city-block/next-day/next-day.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import * as Weather from './state/weather.reducer';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './state/weather.effects';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CityBlockComponent,
    SearchComponent,
    NextDayComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({weather: Weather.reducer}),
    EffectsModule.forRoot([WeatherEffects]),
    EffectsModule.forFeature([WeatherEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
