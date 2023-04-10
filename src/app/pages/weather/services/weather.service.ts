import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Weather } from '../../../shared/interfaces/weather.interface';
import { enviroment } from '../../../../enviroments/enviroment.prod';
import { Temperature } from '../../../enums/temperature';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private readonly API_URL_WEATHER = enviroment.WeatherApi.url;
  temperature = new BehaviorSubject<number>(Temperature.Celsius);
  // private readonly API_KEY_WEATHER = enviroment.WeatherApi.key;

  constructor(private readonly http: HttpClient) {}

  // public getWeatherByName(city: string): Observable<Weather> {
  //   const params = new HttpParams().set('q', city);

  //   return this.http.get<Weather>(`${this.API_URL}/weather`, { params });
  // }

  public getWeatherHoursByName(city: string): Observable<Weather> {
    const params = new HttpParams()
      .set('q', city)
      .set('days', 7)
      .set('aqui', 'no')
      .set('alerts', 'no');

    return this.http.get<Weather>(`${this.API_URL_WEATHER}forecast.json`, {
      params
    });
  }

  onChangeTemprature(temperature: number): void {
    this.temperature.next(temperature);
  }
  // public getWeatherByCoords(coord: Coord): Observable<Weather> {
  //   const params = new HttpParams()
  //     .set('lat', coord.latitude)
  //     .set('lon', coord.longitude);

  //   return this.http.get<Weather>(`${this.API_URL}/weather`, { params });
  // }
}
