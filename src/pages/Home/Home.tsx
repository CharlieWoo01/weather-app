import { ChangeEvent, KeyboardEvent, useState } from "react";
import { usePostcodeWeather } from "../../hooks/useWeather";
import { Search, WeatherForecast, WeatherToday } from "../../components";
import useUserPreferencesStore from "../../stores/userPreferencesStore";
import { getCurrentWeatherUnit } from "../../utils/getWeatherUnit";
import { paginateWeatherData } from "../../utils/paginateWeatherData";

export default function Home() {
  const { unit, decimal } = useUserPreferencesStore();

  const [city, setCity] = useState("London");
  const [searchTerm, setSearchTerm] = useState("London");

  // Fetch weather data based on the searchTerm, not city
  const { data: weatherData, isSuccess } = usePostcodeWeather(searchTerm);

  // Update the city input as the user types
  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  // Only trigger search when Enter key is pressed
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchTerm(city);
    }
  };

  const currentWeather = weatherData?.current;
  const location = weatherData?.location;

  return (
    <div className="flex flex-col items-center w-full flex-grow md:ml-20 mb-16 md:mb-0">
      {/* Search Bar */}
      <div className="w-11/12 flex justify-center py-4">
        <Search
          onChange={handleCityChange}
          onKeyDown={handleKeyDown}
          value={city}
          placeholder="Search for cities"
          className="w-full max-w-2xl"
        />
      </div>

      {/* Weather Today Component */}
      {isSuccess && (
        <div className="w-full flex justify-center items-center my-4">
          <WeatherToday
            cloud={currentWeather?.cloud}
            temperature={getCurrentWeatherUnit(unit, decimal, currentWeather)}
            weatherImage={currentWeather?.condition.icon}
            weatherAlt={currentWeather?.condition.text}
            city={location?.name}
          />
        </div>
      )}

      {/* Today's Forecast Card */}
      <div className="w-full flex justify-center items-center my-4">
        <WeatherForecast
          paginatedHourlyTimes={paginateWeatherData(1, 6, weatherData)}
          unit={unit}
          decimal={decimal}
        />
      </div>
    </div>
  );
}
