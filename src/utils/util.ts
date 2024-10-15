import { format } from "date-fns";

// TODO: Move these interfaces somewhere maybe?
interface HourlyData {
  time: string;
  temp_c: number;
  is_day: number;
  condition: Condition;
}

interface Condition {
  icon: string;
  text: string;
}

export const extractHourlyTimes = (forecastData: any): HourlyData[] => {
  const forecastDay = forecastData?.forecast?.forecastday?.[0] ?? null;

  if (!forecastDay) {
    return [];
  }

  const hourlyData =
    forecastDay.hour?.map((hour: any) => {
      const date = new Date(hour?.time ?? "");
      const timeOnly = format(date, "HH:mm");

      return {
        time: timeOnly,
        temp_c: hour?.temp_c ?? 0,
        is_day: hour?.is_day ?? 1,
        condition: hour?.condition ?? { text: "", icon: "" },
      };
    }) ?? [];

  return hourlyData;
};
