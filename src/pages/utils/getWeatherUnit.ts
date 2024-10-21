import { WeatherService } from "../../service/weatherService";

export function getWeatherForecastUnit(
  unit: string,
  hour: WeatherService.Hour
) {
  return unit === "Celsius" ? `${hour.temp_c} °C` : `${hour.temp_f} °F`;
}

export function getCurrentWeatherUnit(
  unit: string,
  hour?: WeatherService.Current
) {
  if (!hour) {
    return hour;
  }

  return unit === "Celsius" ? `${hour.temp_c} °C` : `${hour.temp_f} °F`;
}
