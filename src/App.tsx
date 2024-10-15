import React, { useState } from "react";
import { usePostcodeWeather } from "./hooks/useWeather";

function App() {
  // const [city, setCity] = useState("ME58RT");

  // const { data, error, isLoading } = usePostcodeWeather(city);

  // const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setCity(e.target.value);
  // };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-500">Tailwind works!</h1>
    </div>
  );
}

export default App;
