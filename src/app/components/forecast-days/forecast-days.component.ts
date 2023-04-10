import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { Forecastday } from '../../shared/interfaces/weather.interface';
import { Temperature_Icon } from 'src/app/enums/temperature';

@Component({
  selector: 'app-forecast-days',
  templateUrl: './forecast-days.component.html',
  styleUrls: ['./forecast-days.component.css']
})
export class ForecastDaysComponent implements OnInit {
  @Input() forecastDay: Forecastday[];
  @Input() icon_temperature = Temperature_Icon.Celsius;
  @Output() forecastDayOutput = new EventEmitter<Forecastday>();

  ngOnInit(): void {
    this.forecastDay[0].select = true;
  }

  public onChange(day: Forecastday): void {
    this.forecastDay.forEach((x) => {
      x.select = false;
      if (x.date == day.date) {
        x.select = true;
      }
    });
    this.forecastDayOutput.emit(day);
  }
}
