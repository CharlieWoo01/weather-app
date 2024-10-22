import { WeatherService } from "../service/weatherService";

/**
 * Paginates weather forecast data based on the page number and page size.
 *
 * @param page - The current page number (1-based index).
 * @param pageSize - The number of items per page.
 * @param weatherData - The weather data from the API.
 * @returns The paginated hourly forecast times.
 */
export function paginateWeatherData(
  page: number,
  pageSize: number,
  weatherData?: WeatherService.WeatherResponse
): WeatherService.Hour[] {
  const hourlyTimes = weatherData?.forecast?.forecastday?.[0]?.hour ?? [];
  const startIndex = (page - 1) * pageSize;

  return hourlyTimes.slice(startIndex, startIndex + pageSize);
}
