import axios from "axios";
import { WeatherResponse } from "./config";

const weatherApi = axios.create({
  baseURL: "https://api.weatherapi.com/v1",
  params: {
    key: "",
  },
});

export const getWeatherByPostcode = async (postcode: string) => {
  const response = await weatherApi.get<WeatherResponse>("/current.json", {
    params: {
      q: postcode,
    },
  });

  return response.data;
};
