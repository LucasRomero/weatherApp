import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  WeatherData,
  Coord
} from '../../../shared/interfaces/weather.interface';
import { enviroment } from '../../../../enviroments/enviroment.prod';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private readonly API_URL = enviroment.openWeather.url;

  constructor(private readonly http: HttpClient) {}

  public getWeatherByName(city: string): Observable<WeatherData> {
    const params = new HttpParams().set('q', city);

    return this.http.get<WeatherData>(`${this.API_URL}/weather`, { params });
  }

  public getWeatherByCoords(coord: Coord): Observable<WeatherData> {
    const params = new HttpParams().set('q', coord.lat).set('q', coord.lon);

    return this.http.get<WeatherData>(`${this.API_URL}/weather`, { params });
  }
}
