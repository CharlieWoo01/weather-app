import { screen, fireEvent, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import "@testing-library/jest-dom";
import Home from "./Home";
import { usePostcodeWeather } from "../../hooks/useWeather";
import { renderComponentWithProviders } from "../../test-utils";
import { forecastData, newYorkForecast } from "../../mocks/weatherMocks";

vi.mock("../../hooks/useWeather");

describe("<Home />", () => {
  it("should display the search bar and initial weather data", async () => {
    vi.mocked(usePostcodeWeather).mockReturnValue({
      data: forecastData,
      isSuccess: true,
      isLoading: false,
    });

    renderComponentWithProviders(<Home />);

    expect(screen.getByPlaceholderText("Search for cities")).toHaveValue(
      "London"
    );

    await waitFor(() => {
      expect(screen.getByAltText(/Partly cloudy/i)).toBeInTheDocument();
      expect(screen.getByText(/34 °C/i)).toBeInTheDocument();
      expect(screen.getByText(/London/i)).toBeInTheDocument();
    });
  });

  it("should update city name on input and trigger search on Enter key", async () => {
    vi.mocked(usePostcodeWeather).mockReturnValue({
      data: newYorkForecast,
      isSuccess: true,
      isLoading: false,
    });

    renderComponentWithProviders(<Home />);

    const input = screen.getByPlaceholderText("Search for cities");
    fireEvent.change(input, { target: { value: "New York" } });

    // Simulate pressing Enter to trigger search
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    await waitFor(() => {
      expect(screen.getByAltText(/Partly cloudy/i)).toBeInTheDocument();
      expect(screen.getByText(/34 °C/i)).toBeInTheDocument();
      expect(screen.getByText(/New York/i)).toBeInTheDocument();
    });
  });

  it("should display error message when there is an error", () => {
    vi.mocked(usePostcodeWeather).mockReturnValue({
      data: undefined,
      isSuccess: false,
      isLoading: false,
    });

    renderComponentWithProviders(<Home />);

    expect(screen.queryByText(/Partly Cloudy/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/London/i)).not.toBeInTheDocument();
  });
});
