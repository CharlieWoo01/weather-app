interface WeatherTodayProps {
  city?: string;
  cloud?: number;
  temperature?: number;
  weatherImage?: string;
  weatherAlt?: string;
}

export default function WeatherToday({
  city,
  cloud,
  temperature,
  weatherImage,
  weatherAlt,
}: WeatherTodayProps) {
  return (
    <div className="w-full p-4 flex justify-center ">
      <div className="flex flex-col md:flex-row justify-around items-center rounded-lg w-full max-w-2xl">
        <div className="flex flex-col justify-between items-center md:items-start md:pr-40">
          <h1 className="text-white text-4xl font-semibold">{city}</h1>
          <p className="text-gray-400 mt-1">Chance of cloud: {cloud}%</p>
          <p className="text-5xl text-white font-bold mt-8 md:mt-16">
            {temperature}°
          </p>
        </div>
        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={weatherImage}
            alt={weatherAlt}
            className="w-40 h-40 md:w-48 md:h-48 lg:w-60 lg:h-60"
          />
        </div>
      </div>
    </div>
  );
}
