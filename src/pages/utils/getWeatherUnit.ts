import { Decimal, Unit } from "../../constants/settings";
import { WeatherService } from "../../service/weatherService";

/**
 * Formats the temperature based on the unit and decimal settings for weather forecast.
 *
 * @param unit - The temperature unit, either "Celsius" or "Fahrenheit".
 * @param decimal - A string value, either "On" or "Off".
 * @param hour - The weather data containing temperature values for the forecast.
 * @returns The formatted temperature string.
 */
export function getWeatherForecastUnit(
  unit: string,
  decimal: string,
  hour: WeatherService.Hour
) {
  const formatNumberBasedOnDecimal = (
    value: number,
    decimalSetting: string
  ): string => {
    return decimalSetting === Decimal.Off
      ? Math.round(value).toString()
      : value.toFixed(1);
  };

  return unit === Unit.Celsius
    ? `${formatNumberBasedOnDecimal(hour.temp_c, decimal)} °C`
    : `${formatNumberBasedOnDecimal(hour.temp_f, decimal)} °F`;
}

/**
 * Formats the temperature based on the unit and decimal settings for current weather.
 *
 * @param unit - The temperature unit, either "Celsius" or "Fahrenheit".
 * @param decimal - A string value, either "On" or "Off".
 * @param hour - The weather data containing temperature values for the current weather.
 * @returns The formatted temperature string, or the original value if no weather data is provided.
 */
export function getCurrentWeatherUnit(
  unit: string,
  decimal: string,
  hour?: WeatherService.Current
) {
  const formatNumberBasedOnDecimal = (
    value: number,
    decimalSetting: string
  ): string => {
    return decimalSetting === "Off"
      ? Math.round(value).toString()
      : value.toFixed(1);
  };

  if (!hour) {
    return hour;
  }

  return unit === Unit.Celsius
    ? `${formatNumberBasedOnDecimal(hour.temp_c, decimal)} °C`
    : `${formatNumberBasedOnDecimal(hour.temp_f, decimal)} °F`;
}
