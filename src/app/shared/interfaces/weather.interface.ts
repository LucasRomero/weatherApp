export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}

export interface Day {
  maxtemp_selected: number;
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_selected: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_selected: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_selected: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  avgvis_selected: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  condition: Condition;
  uv: number;
}

export interface Astro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: string;
}

export interface Condition2 {
  text: string;
  icon: string;
  code: number;
}

export interface Hour {
  time_epoch: number;
  time: string;
  temp_selected: number;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition2;
  wind_selected: number;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_selected: number;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_selected: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_selected: number;
  gust_mph: number;
  gust_kph: number;
}

export interface Forecastday {
  select: boolean;
  date: string;
  date_epoch: number;
  day: Day;
  astro: Astro;
  hour: Hour[];
}

export interface Forecast {
  forecastday: Forecastday[];
}

export interface Weather {
  location: Location;
  forecast: Forecast;
  current: Current;
  icon_temperature: string;
}

export interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_selected: number;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_selected: number;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_selected: number;
  pressure_mb: number;
  pressure_in: number;
  precip_selected: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  feelslike_selected: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_selected: number;
  gust_mph: number;
  gust_kph: number;
}
