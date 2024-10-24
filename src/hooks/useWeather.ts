import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { WeatherService } from "../service/weatherService";

export const usePostcodeWeather = (postcode: string, options = {}) => {
  const formatPostcode = postcode.toLowerCase();

  const { data, isLoading, isSuccess } = useQuery({
    ...options,
    queryKey: ["postcode", formatPostcode],
    staleTime: 10 * 60 * 1000, // 10 minutes cache
    queryFn: () => WeatherService.getWeatherByPostcode(formatPostcode),
    select: (data) => {
      const forecastDay = data?.forecast?.forecastday?.[0] ?? null;

      // Return the original data if no forecast day is found
      if (!forecastDay) {
        return data;
      }

      const modifiedHourlyData =
        forecastDay.hour?.map((hour: WeatherService.Hour) => {
          const date = new Date(hour?.time ?? "");
          const timeOnly = format(date, "HH:mm");

          // Modify just the time with the formatted time
          return {
            ...hour,
            time: timeOnly,
          };
        }) ?? [];

      // Replace only the time field in the hourly data while preserving everything else
      return {
        ...data,
        forecast: {
          ...data.forecast,
          forecastday: [
            {
              ...forecastDay,
              hour: modifiedHourlyData,
            },
          ],
        },
      };
    },
  });

  // Return only isLoading, isSuccess, and data
  return { data, isLoading, isSuccess };
};
