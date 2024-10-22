import { render, screen } from "@testing-library/react";
import WeatherToday from "./WeatherToday";
import { renderComponentWithProviders } from "../../test-utils";

const defaultProps = {
  city: "New York",
  cloud: 50,
  temperature: "25°C",
  weatherImage: "weather-image-url",
  weatherAlt: "cloudy weather",
};

const renderComponent = (props = {}) =>
  renderComponentWithProviders(<WeatherToday {...props} />);

describe("<WeatherToday />", () => {
  it("renders the city name", () => {
    renderComponent(defaultProps);
    const cityElement = screen.getByTestId("weather-city-name");
    expect(cityElement).toHaveTextContent("New York");
  });

  it("renders the cloud percentage", () => {
    renderComponent(defaultProps);
    const cloudElement = screen.getByTestId("weather-cloud-chance");
    expect(cloudElement).toHaveTextContent("50%");
  });

  it("renders the temperature", () => {
    renderComponent(defaultProps);
    const temperatureElement = screen.getByTestId("weather-temperature");
    expect(temperatureElement).toHaveTextContent("25°C");
  });

  it("renders the weather image with correct src and alt", () => {
    renderComponent(defaultProps);
    const weatherImage = screen.getByAltText("cloudy weather");
    expect(weatherImage).toHaveAttribute("src", "weather-image-url");
    expect(weatherImage).toHaveAttribute("alt", "cloudy weather");
  });

  it("handles missing optional props gracefully", () => {
    render(<WeatherToday />);
    const cityElement = screen.getByTestId("weather-city-name");
    const cloudElement = screen.getByTestId("weather-cloud-chance");
    const temperatureElement = screen.getByTestId("weather-temperature");

    expect(cityElement).toBeEmptyDOMElement();
    expect(cloudElement).toHaveTextContent("%");
    expect(temperatureElement).toBeEmptyDOMElement();
  });
});
