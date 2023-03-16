import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Weather, Hour } from '../../shared/interfaces/weather.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent implements OnInit {
  @Input() weather: Weather;
  private weatherCopy: Weather;
  private hours: Hour[];

  ngOnInit(): void {
    this.weatherCopy = this.weather;
    this.getHours();
    this.weatherHours();
  }

  private getHours(): void {
    if (this.weather) {
      this.weather.forecast.forecastday.forEach((day) => {
        this.hours = day.hour;
      });
    }
  }

  private weatherHours(): void {
    if (this.hours) {
      const index = this.hours.findIndex((hour) => {
        return new Date(hour.time).getHours() == new Date().getHours();
      });
      this.hours.splice(0, index);
      console.log(this.hours);
    }
  }
}
