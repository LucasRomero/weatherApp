import { Component, Input } from '@angular/core';
import { Forecastday } from '../../shared/interfaces/weather.interface';

@Component({
  selector: 'app-forecast-days',
  templateUrl: './forecast-days.component.html',
  styleUrls: ['./forecast-days.component.css']
})
export class ForecastDaysComponent {
  @Input() forecastDay: Forecastday[];
}
