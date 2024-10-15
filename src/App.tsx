import React, { useState } from "react";
import { usePostcodeWeather } from "./hooks/useWeather";
import Card from "./components/Card/Card";
import { forecastData } from "./mocks/weatherMocks";
import { extractHourlyTimes } from "./utils/util";
import classNames from "classnames";

function App() {
  // const [city, setCity] = useState("ME58RT");

  // const { data, error, isLoading } = usePostcodeWeather(city);

  // const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setCity(e.target.value);
  // };

  const hourlyTimes = extractHourlyTimes(forecastData);

  // TODO: Move this into a util somewhere maybe?
  // TODO: Use i18n if got time
  const page = 1;
  const pageSize = 5;
  const startIndex = (page - 1) * pageSize;
  const paginatedHourlyTimes = hourlyTimes.slice(startIndex, page + pageSize);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <Card title="Today's Forecast" className="w-1/2">
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
      </Card>
    </div>
  );
}

export default App;
