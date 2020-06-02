import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherByCity(city: string): Observable<any>{
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=36e8f1f7b94b6bbe6bfeafcf2129c61b`);
  }

  getWeatherById(id: string): Observable<any> {
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=36e8f1f7b94b6bbe6bfeafcf2129c61b`);
  }

  getLocation(): Observable<any> {
    return this.http.get(`https://ghb.adtelligent.com/geo`);
  }
}