import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit
} from '@angular/core';
import {
  Weather,
  Forecastday
} from '../../shared/interfaces/weather.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent implements OnInit, OnChanges {
  @Input() weather: Weather;
  forecastDay: Forecastday[];

  ngOnInit(): void {
    this.getForecast();
    //this.weatherHours();
  }

  ngOnChanges() {
    // When input get new information, this refresh the array
    this.getForecast();
    //this.weatherHours();
  }

  getForecast() {
    this.forecastDay = [...this.weather.forecast.forecastday];
  }

  // private weatherHours(): void {
  //   const index = this.hours.findIndex((hour) => {
  //     return new Date(hour.time).getHours() == new Date().getHours();
  //   });
  //   this.hours.splice(0, index);
  //   console.log(this.hours);
  // }
}
