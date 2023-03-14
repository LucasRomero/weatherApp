import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from './shared/interfaces/weather.interface';
import { WeatherService } from './pages/weather/services/weather.service';
import { GeoLocationService } from './shared/services/geo-location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public weather$!: Observable<WeatherData>;
  constructor(
    private readonly weatherService: WeatherService,
    private readonly geoLocationService: GeoLocationService
  ) {
    this.getLocation();
  }

  public onSearch(city: string): void {
    this.weather$ = this.weatherService.getWeatherByName(city);
  }

  private async getLocation(): Promise<void> {
    try {
      const { coords } = await this.geoLocationService.getCurrentPosition();
      this.weather$ = this.weatherService.getWeatherByCoords(coords);
    } catch (error) {
      console.log(error);
    }
  }
}

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
