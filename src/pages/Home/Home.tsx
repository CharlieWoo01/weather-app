import { ChangeEvent, KeyboardEvent, useState } from "react";
import { usePostcodeWeather } from "../../hooks/useWeather";
import { Card, Search, WeatherToday } from "../../components";
import classNames from "classnames";

export default function Home() {
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

  // Ensure that data exists before attempting to extract hourly times
  const hourlyTimes = weatherData?.forecast?.forecastday?.[0]?.hour ?? [];

  const page = 1;
  const pageSize = 6;
  const startIndex = (page - 1) * pageSize;
  const paginatedHourlyTimes = hourlyTimes.slice(startIndex, pageSize);

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
            temperature={currentWeather?.temp_c}
            weatherImage={currentWeather?.condition.icon}
            weatherAlt={currentWeather?.condition.text}
            city={location?.name}
          />
        </div>
      )}

      {/* Today's Forecast Card */}
      <div className="w-full flex justify-center items-center my-4">
        <Card title="Today's Forecast" className="w-full max-w-2xl text-center">
          {paginatedHourlyTimes.length > 0 ? (
            <div className="grid grid-cols-6 gap-2">
              {paginatedHourlyTimes.map((weather, index) => (
                <div
                  key={index}
                  className={classNames("flex flex-col items-center pr-4", {
                    "border-r-2 border-gray-700":
                      index !== paginatedHourlyTimes.length - 1,
                  })}
                  data-testid={`forecast-item-${index}`}
                >
                  <p data-testid={`forecast-time-${index}`}>{weather.time}</p>
                  <img
                    src={weather.condition.icon}
                    alt={`${weather.condition.text} icon`}
                    className="w-16 h-16"
                    data-testid={`forecast-icon-${index}`}
                  />
                  <p
                    className="text-xl text-gray-300 mt-2"
                    data-testid={`forecast-temperature-${index}`}
                  >
                    {weather.temp_c}°
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-300">
              No data available. Please try to search again
            </p>
          )}
        </Card>
      </div>
    </div>
  );
}
