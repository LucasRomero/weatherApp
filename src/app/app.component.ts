import { Component, OnInit } from '@angular/core';
import { Weather } from './shared/interfaces/weather.interface';
import { WeatherService } from './pages/weather/services/weather.service';
import { GeoLocationService } from './shared/services/geo-location.service';
import { Temperature } from './enums/temperature';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  weather: Weather;
  selectedTemperature: number = Temperature.Celsius;

  constructor(
    private readonly weatherService: WeatherService,
    private readonly geoLocationService: GeoLocationService
  ) {
    // if (navigator?.geolocation) {
    //   this.getLocation();
    // }
  }
  ngOnInit(): void {
    this.weatherService
      .getWeatherHoursByName('buenos aires')
      .subscribe((resp) => {
        this.weather = resp;
        console.log(this.weather);
      });
  }

  public onSearch(city: string): void {
    // this.weather$ = this.weatherService.getWeatherByName(city);
    this.weatherService.getWeatherHoursByName(city).subscribe((resp) => {
      this.weather = resp;
      console.log(this.weather);
    });
  }

  onChangeTemp(temperature: number): void {
    this.weatherService.onChangeTemprature(temperature);
  }

  // private async getLocation(): Promise<void> {
  //   try {
  //     const { coords } = await this.geoLocationService.getCurrentPosition();
  //     this.weather$ = this.weatherService.getWeatherByCoords(coords);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}
