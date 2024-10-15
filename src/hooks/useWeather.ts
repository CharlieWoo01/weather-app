import { useQuery } from "@tanstack/react-query";
import { getWeatherByPostcode } from "../service/weatherService";

export const usePostcodeWeather = (postcode: string, options = {}) => {
  return useQuery({
    ...options,
    queryKey: ["postcode", postcode],
    queryFn: () => getWeatherByPostcode(postcode),
  });
};
