import { render, screen } from "@testing-library/react";
import WeatherForecast from "./WeatherForecast";
import { forecastData } from "../../mocks/weatherMocks";
import { getWeatherForecastUnit } from "../../utils/getWeatherUnit";
import { Decimal, Unit } from "../../constants/settings";

describe("<WeatherForecast />", () => {
  const mockPaginatedHourlyTimes =
    forecastData.forecast.forecastday[0].hour.slice(0, 6);

  it("renders the forecast items when data is available", () => {
    render(
      <WeatherForecast
        paginatedHourlyTimes={mockPaginatedHourlyTimes}
        unit={Unit.Celsius}
        decimal={Decimal.Off}
      />
    );

    // Iterate through all hourly data which is mocked
    mockPaginatedHourlyTimes.forEach((weather, index) => {
      expect(screen.getByTestId(`forecast-item-${index}`)).toBeInTheDocument();
      expect(screen.getByTestId(`forecast-time-${index}`)).toHaveTextContent(
        weather.time
      );

      const icon = screen.getByTestId(`forecast-icon-${index}`);
      expect(icon).toHaveAttribute("src", weather.condition.icon);
      expect(icon).toHaveAttribute("alt", `${weather.condition.text} icon`);

      // Check if the temperature is displayed
      const expectedTemperature = getWeatherForecastUnit(
        Unit.Celsius,
        Decimal.Off,
        weather
      );
      expect(
        screen.getByTestId(`forecast-temperature-${index}`)
      ).toHaveTextContent(expectedTemperature);
    });
  });

  it("renders 'No data available' when no forecast data is provided", () => {
    render(
      <WeatherForecast
        paginatedHourlyTimes={[]}
        unit={Unit.Celsius}
        decimal={Decimal.Off}
      />
    );

    expect(
      screen.getByText("No data available. Please try to search again")
    ).toBeInTheDocument();
  });
});
