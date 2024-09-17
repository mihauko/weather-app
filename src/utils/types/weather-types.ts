// Define the interface for the location data
interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

// Define the interface for the condition data
interface Condition {
  text: string;
  icon: string;
  code: number;
}

// Define the interface for the current weather data
interface CurrentWeather {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

// Define the interface for the astro data
interface Astro {
  is_moon_up: number;
  is_sun_up: number;
  moon_illumination: string;
  moon_phase: string;
  moonrise: string;
  moonset: string;
  sunrise: string;
  sunset: string;
}

// Define the interface for the day data
interface Day {
  avghumidity: number;
  avgtemp_c: number;
  avgtemp_f: number;
  avgvis_km: number;
  avgvis_miles: number;
  condition: Condition;
  daily_chance_of_rain: number;
  daily_chance_of_snow: number;
  daily_will_it_rain: number;
  daily_will_it_snow: number;
  maxtemp_c: number;
  maxtemp_f: number;
  maxwind_kph: number;
  maxwind_mph: number;
  mintemp_c: number;
  mintemp_f: number;
  totalprecip_in: number;
  totalprecip_mm: number;
  totalsnow_cm: number;
  uv: number;
}

// Define the interface for the forecast day data
interface ForecastDay {
  date: string;
  date_epoch: number;
  day: Day;
  astro: Astro;
  hour: [];
}

// Define the interface for the forecast data
interface Forecast {
  forecastday: ForecastDay[];
}

// Define the interface for the complete weather data
interface WeatherData {
  location: Location;
  current: CurrentWeather;
  forecast: Forecast;
}

// Export the mock data function and interfaces
export type {
  WeatherData,
  Location,
  CurrentWeather,
  Condition,
  Forecast,
  ForecastDay,
  Day,
  Astro,
};
