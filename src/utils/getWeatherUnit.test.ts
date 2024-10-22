import { Decimal, Unit } from "../constants/settings";
import { WeatherService } from "../service/weatherService";
import {
  getCurrentWeatherUnit,
  getWeatherForecastUnit,
} from "./getWeatherUnit";

describe("getWeatherForecastUnit", () => {
  const hourMock = {
    temp_c: 21.56,
    temp_f: 70.8,
  } as WeatherService.Hour;

  it("formats the temperature in Celsius with decimal off", () => {
    const result = getWeatherForecastUnit(Unit.Celsius, Decimal.Off, hourMock);
    expect(result).toBe("22 °C");
  });

  it("formats the temperature in Celsius with decimal on", () => {
    const result = getWeatherForecastUnit(Unit.Celsius, Decimal.On, hourMock);
    expect(result).toBe("21.6 °C");
  });

  it("formats the temperature in Fahrenheit with decimal off", () => {
    const result = getWeatherForecastUnit(
      Unit.Fahrenheit,
      Decimal.Off,
      hourMock
    );
    expect(result).toBe("71 °F");
  });

  it("formats the temperature in Fahrenheit with decimal on", () => {
    const result = getWeatherForecastUnit(
      Unit.Fahrenheit,
      Decimal.On,
      hourMock
    );
    expect(result).toBe("70.8 °F");
  });
});

describe("getCurrentWeatherUnit", () => {
  const currentWeatherMock = {
    temp_c: 18.45,
    temp_f: 65.2,
  } as WeatherService.Current;

  it("formats the current temperature in Celsius with decimal off", () => {
    const result = getCurrentWeatherUnit(
      Unit.Celsius,
      Decimal.Off,
      currentWeatherMock
    );
    expect(result).toBe("18 °C");
  });

  it("formats the current temperature in Celsius with decimal on", () => {
    const result = getCurrentWeatherUnit(
      Unit.Celsius,
      Decimal.On,
      currentWeatherMock
    );
    expect(result).toBe("18.4 °C");
  });

  it("formats the current temperature in Fahrenheit with decimal off", () => {
    const result = getCurrentWeatherUnit(
      Unit.Fahrenheit,
      Decimal.Off,
      currentWeatherMock
    );
    expect(result).toBe("65 °F");
  });

  it("formats the current temperature in Fahrenheit with decimal on", () => {
    const result = getCurrentWeatherUnit(
      Unit.Fahrenheit,
      Decimal.On,
      currentWeatherMock
    );
    expect(result).toBe("65.2 °F");
  });

  it("returns undefined when no current weather data is provided", () => {
    const result = getCurrentWeatherUnit(Unit.Celsius, Decimal.Off, undefined);
    expect(result).toBeUndefined();
  });
});
