import { Forecastday } from '../../shared/interfaces/weather.interface';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { Weather } from '../../shared/interfaces/weather.interface';
import {
  Temperature,
  Temperature_Icon,
  Wind,
  Precipitation,
  Pressure
} from '../../enums/temperature';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnChanges {
  @Input() weather: Weather;

  selectedWeather: Weather;
  Temperature = Temperature;
  forecastDay: Forecastday;
  CurrentDay = true;
  today: string;
  pressure = Pressure.Millibars;
  precipitation = Precipitation.Millimeters;
  wind = Wind.Kilometers;
  icon_temperature = Temperature_Icon.Celsius;
  temperatureSelected = Temperature.Celsius;

  constructor(private readonly weatherService: WeatherService) {}

  ngOnChanges(): void {
    this.setTemperature(this.temperatureSelected);
  }

  ngOnInit(): void {
    this.selectedWeather = structuredClone(this.weather);
    this.forecastDay = this.selectedWeather.forecast.forecastday[0];
    this.today = this.forecastDay.date;

    this.setTemperature(this.temperatureSelected);

    this.weatherService.temperature.subscribe((temp) => {
      this.temperatureSelected = temp;
      this.setTemperature(temp);
    });
  }

  onFilterWeather(forecastDay: Forecastday) {
    //refresh selectedWeather with selected day
    this.selectedWeather = {
      ...this.weather,
      forecast: {
        forecastday: this.getForecastDay(forecastDay)
      }
    };
    this.forecastDay = forecastDay;
    this.CurrentDay = forecastDay.date === this.today;
    this.setTemperature(this.temperatureSelected);
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

  setTemperature(temperature = 1): void {
    if (temperature === Temperature.Celsius) {
      this.icon_temperature = Temperature_Icon.Celsius;

      // Set Current
      this.selectedWeather.current.feelslike_selected =
        this.selectedWeather.current.feelslike_c;
      this.selectedWeather.current.wind_selected =
        this.selectedWeather.current.wind_kph;
      this.selectedWeather.current.pressure_selected =
        this.selectedWeather.current.pressure_mb;
      this.selectedWeather.current.precip_selected =
        this.selectedWeather.current.precip_mm;
      this.selectedWeather.current.temp_selected =
        this.selectedWeather.current.temp_c;

      // Set Future Day
      this.forecastDay.day.maxtemp_selected = this.forecastDay.day.maxtemp_c;
      this.forecastDay.day.mintemp_selected = this.forecastDay.day.mintemp_c;
      this.forecastDay.day.totalprecip_selected =
        this.forecastDay.day.totalprecip_mm;

      // Set hours
      this.forecastDay.hour.forEach((hour) => {
        hour.temp_selected = hour.temp_c;
      });

      this.weather.forecast.forecastday.forEach((day) => {
        day.day.maxtemp_selected = day.day.maxtemp_c;
        day.day.mintemp_selected = day.day.mintemp_c;
      });

      // Set Settings
      this.pressure = Pressure.Millibars;
      this.precipitation = Precipitation.Millimeters;
      this.wind = Wind.Kilometers;
    } else {
      this.icon_temperature = Temperature_Icon.Farenheit;

      // Set Current
      this.selectedWeather.current.feelslike_selected =
        this.selectedWeather.current.feelslike_f;
      this.selectedWeather.current.wind_selected =
        this.selectedWeather.current.wind_mph;
      this.selectedWeather.current.pressure_selected =
        this.selectedWeather.current.pressure_in;
      this.selectedWeather.current.precip_selected =
        this.selectedWeather.current.precip_in;
      this.selectedWeather.current.temp_selected =
        this.selectedWeather.current.temp_f;

      // Set Future Day
      this.forecastDay.day.maxtemp_selected = this.forecastDay.day.maxtemp_f;
      this.forecastDay.day.mintemp_selected = this.forecastDay.day.mintemp_f;
      this.forecastDay.day.totalprecip_selected =
        this.forecastDay.day.totalprecip_in;

      // Set hours
      this.forecastDay.hour.forEach((hour) => {
        hour.temp_selected = hour.temp_f;
      });

      this.weather.forecast.forecastday.forEach((day) => {
        day.day.maxtemp_selected = day.day.maxtemp_f;
        day.day.mintemp_selected = day.day.mintemp_f;
      });

      // Set Settings
      this.pressure = Pressure.Inches;
      this.precipitation = Precipitation.Inches;
      this.wind = Wind.Miles;
    }
  }

  // private weatherHours(): void {
  //   const index = this.hours.findIndex((hour) => {
  //     return new Date(hour.time).getHours() == new Date().getHours();
  //   });
  //   this.hours.splice(0, index);
  //   console.log(this.hours);
  // }
}
