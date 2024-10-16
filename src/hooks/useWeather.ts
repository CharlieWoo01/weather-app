import { useQuery } from "@tanstack/react-query";
import { getWeatherByPostcode, Hour } from "../service/weatherService";
import { format } from "date-fns";

export const usePostcodeWeather = (postcode: string, options = {}) => {
  return useQuery({
    ...options,
    queryKey: ["postcode", postcode],
    queryFn: () => getWeatherByPostcode(postcode),
    select: (data) => {
      const forecastDay = data?.forecast?.forecastday?.[0] ?? null;

      // Return the original data if no forecast day is found
      if (!forecastDay) {
        return data;
      }

      const modifiedHourlyData =
        forecastDay.hour?.map((hour: Hour) => {
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
};
