import React, { useState } from "react";
import { usePostcodeWeather } from "./hooks/useWeather";
import Card from "./components/Card/Card";
import { extractHourlyTimes } from "./utils/util";
import classNames from "classnames";

function App() {
  const [city, setCity] = useState("London");

  const { data, isLoading } = usePostcodeWeather(city);

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  // Ensure that `data` exists before attempting to extract hourly times
  const hourlyTimes = data ? extractHourlyTimes(data) : [];

  // TODO: Move this into a util somewhere maybe?
  // TODO: Use i18n if got time
  const page = 1;
  const pageSize = 6;
  const startIndex = (page - 1) * pageSize;
  const paginatedHourlyTimes = hourlyTimes.slice(startIndex, pageSize);

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Enter city name"
      />
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <Card title="Today's Forecast" className="w-1/2">
          {isLoading ? (
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
                  <p className="text-xl text-gray-300 mt-2">{weather.temp_c}°</p>
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
