import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Forecastday } from '../../shared/interfaces/weather.interface';

@Component({
  selector: 'app-forecast-days',
  templateUrl: './forecast-days.component.html',
  styleUrls: ['./forecast-days.component.css']
})
export class ForecastDaysComponent implements OnInit {
  @Input() forecastDay: Forecastday[];
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
