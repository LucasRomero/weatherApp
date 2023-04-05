import {
  Forecastday,
  Current
} from '../../shared/interfaces/weather.interface';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Weather } from '../../shared/interfaces/weather.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent implements OnInit {
  @Input() weather: Weather;
  selectedWeather: Weather;
  forecastDay: Forecastday;
  CurrentDay = true;
  today: string;

  ngOnInit(): void {
    this.selectedWeather = structuredClone(this.weather);
    this.forecastDay = this.selectedWeather.forecast.forecastday[0];
    this.today = this.forecastDay.date;
  }

  onFilterWeather(forecastDay: Forecastday) {
    // refresh selectedWeather with selected day
    this.selectedWeather = {
      ...this.weather,
      forecast: {
        forecastday: this.getForecastDay(forecastDay)
      }
    };

    this.forecastDay = forecastDay;

    const isToday = forecastDay.date === this.today;
    this.CurrentDay = isToday;
  }

  getForecastDay(forecastDay: Forecastday): Forecastday[] {
    const Day = this.weather.forecast.forecastday.find((x) => {
      if (forecastDay.date == x.date) {
        return x;
      }
      return null;
    });

    return [Day] ?? [forecastDay];
  }

  // private weatherHours(): void {
  //   const index = this.hours.findIndex((hour) => {
  //     return new Date(hour.time).getHours() == new Date().getHours();
  //   });
  //   this.hours.splice(0, index);
  //   console.log(this.hours);
  // }
}
