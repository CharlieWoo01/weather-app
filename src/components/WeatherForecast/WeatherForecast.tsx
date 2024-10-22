import classNames from "classnames";
import Card from "../Card";
import { getWeatherForecastUnit } from "../../utils/getWeatherUnit";
import { WeatherService } from "../../service/weatherService";

interface WeatherForecastProps {
  paginatedHourlyTimes: WeatherService.Hour[];
  unit: string;
  decimal: string;
}

export default function WeatherForecast({
  paginatedHourlyTimes,
  unit,
  decimal,
}: WeatherForecastProps) {
  return (
    <Card title="Todays Forecast" className="w-full max-w-2xl text-center">
      {paginatedHourlyTimes.length > 0 ? (
        <div className="flex overflow-x-auto lg:overflow-x-hidden scrollbar-hide justify-start">
          {paginatedHourlyTimes.map((weather, index) => (
            <div
              key={index}
              className={classNames(
                "flex-shrink-0 flex flex-col items-center justify-center px-4 min-w-[96px]",
                {
                  "border-r-2 border-gray-700":
                    index !== paginatedHourlyTimes.length - 1,
                }
              )}
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
                {getWeatherForecastUnit(unit, decimal, weather)}
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
  );
}
