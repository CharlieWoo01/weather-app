import { forecastData } from "../mocks/weatherMocks";
import { paginateWeatherData } from "./paginateWeatherData";

describe("paginateWeatherData", () => {
  const { forecast } = forecastData;

  it("returns the correct paginated results for page 1", () => {
    const result = paginateWeatherData(1, 3, forecastData);
    const expectedResults = forecast.forecastday[0].hour.slice(0, 3); // First 3 items
    expect(result).toEqual(expectedResults);
  });

  it("returns the correct paginated results for page 2", () => {
    const startIndex = (2 - 1) * 3; // Page 2 with pageSize 3
    const expectedResults = forecast.forecastday[0].hour.slice(
      startIndex,
      startIndex + 3
    );
    const result = paginateWeatherData(2, 3, forecastData);
    expect(result).toEqual(expectedResults);
  });

  it("returns the correct paginated results for the last page with fewer items", () => {
    // I dynamically calculate this in case mocks grow/change
    const expectedResults = forecast.forecastday[0].hour.slice(15, 18);
    const result = paginateWeatherData(6, 3, forecastData);
    expect(result).toEqual(expectedResults);
  });

  it("returns an empty array if no weatherData is provided", () => {
    const result = paginateWeatherData(1, 3, undefined);
    expect(result).toEqual([]);
  });

  it("returns an empty array if the page number exceeds the available data", () => {
    const result = paginateWeatherData(100, 3, forecastData);
    expect(result).toEqual([]);
  });
});
