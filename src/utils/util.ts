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
  const forecastDay = forecastData[0].forecast.forecastday[0];
  const hourlyData = forecastDay.hour.map((hour: any) => {
    const date = new Date(hour.time);
    const timeOnly = format(date, "HH:mm");

    return {
      time: timeOnly,
      temp_c: hour.temp_c,
      is_day: hour.is_day,
      condition: hour.condition,
    };
  });
  return hourlyData;
};
