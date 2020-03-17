import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather30() {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=e4a5f2affda9436803a696f4c837200c');
  }

  getCurrentWeather() {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=e4a5f2affda9436803a696f4c837200c');
  }

  getWeather5_8() {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=london&appid=e4a5f2affda9436803a696f4c837200c');
  }
}
