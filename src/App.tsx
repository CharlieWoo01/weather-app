import React, { useState } from "react";
import { usePostcodeWeather } from "./hooks/useWeather";

import classNames from "classnames";
import { Card, Search, WeatherToday } from "./components";

function App() {
  const [city, setCity] = useState("London");

  const { data: weatherData, isLoading: isLoadingWeather } =
    usePostcodeWeather(city);

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  // Ensure that data exists before attempting to extract hourly times
  const hourlyTimes = weatherData?.forecast?.forecastday?.[0]?.hour ?? [];

  // TODO: Move this into a util somewhere maybe?
  // TODO: Use i18n if got time
  const page = 1;
  const pageSize = 6;
  const startIndex = (page - 1) * pageSize;
  const paginatedHourlyTimes = hourlyTimes.slice(startIndex, pageSize);

  const currentWeather = weatherData?.current;
  const location = weatherData?.location;

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center">
      <div className="w-full flex justify-center py-4 fixed top-0 bg-gray-900 z-10">
        <Search
          onChange={handleCityChange}
          value={city}
          placeholder="Search for cities"
          className="w-full max-w-2xl"
        />
      </div>

      <WeatherToday
        cloud={currentWeather?.cloud}
        temperature={currentWeather?.temp_c}
        weatherImage={currentWeather?.condition.icon}
        weatherAlt={currentWeather?.condition.text}
        city={location?.name}
      />
      <div className="w-full flex justify-center items-center mt-4">
        <Card title="Today's Forecast" className="w-full max-w-2xl text-center">
          {isLoadingWeather ? (
            <p className="text-gray-300">Loading...</p>
          ) : paginatedHourlyTimes.length > 0 ? (
            <div className="grid grid-cols-6 gap-2">
              {paginatedHourlyTimes.map((weather, index) => (
                <div
                  key={index}
                  className={classNames("flex flex-col items-center pr-4", {
                    "border-r-2 border-gray-700":
                      index !== paginatedHourlyTimes.length - 1,
                  })}
                >
                  <p>{weather.time}</p>
                  <img
                    src={weather.condition.icon}
                    alt={`${weather.condition.text} icon`}
                    className="w-16 h-16"
                  />
                  <p className="text-xl text-gray-300 mt-2">
                    {weather.temp_c}°
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-300">No data available</p>
          )}
        </Card>
      </div>
    </div>
  );
}

export default App;
