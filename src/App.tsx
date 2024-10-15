import React, { useState } from "react";
import { usePostcodeWeather } from "./hooks/useWeather";

function App() {
  const [city, setCity] = useState("ME58RT");

  const { data, error, isLoading } = usePostcodeWeather(city);

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Enter city name"
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error fetching weather data</p>
      ) : data ? (
        <div>
          <h2>Name: {data.location.name}</h2>
          <h2>Cloud: {data.current.cloud}</h2>
        </div>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}

export default App;
