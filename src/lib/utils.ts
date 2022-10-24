import { ELocale } from './enums';
import { Forecast } from './types';

export const getLocalTime = (timezone: number, locale: ELocale) => {
  const day = new Date();
  const localTime = day.getTime();
  const localOffset = day.getTimezoneOffset() * 60000;
  const utc = localTime + localOffset;
  const formattedDate = utc + 1000 * timezone;

  const localDate = new Date(formattedDate);

  const hours =
    localDate.getHours() < 10
      ? `0${localDate.getHours()}`
      : localDate.getHours();

  const minutes =
    localDate.getMinutes() < 10
      ? `0${localDate.getMinutes()}`
      : localDate.getMinutes();

  return `${localDate.getDate()} ${localDate.toLocaleString(locale, {
    month: 'long',
  })}, ${hours}:${minutes}`;
};

export const getHighestTempByDay = (forecasts: Forecast[]) => {
  const days = forecasts.reduce(
    (
      days: {
        [key: string]: Forecast[];
      },
      forecast: Forecast
    ) => {
      const date = forecast.dt_txt.split(' ')[0];

      if (!days[date]) {
        days[date] = [];
      }

      days[date].push(forecast);

      return days;
    },
    {}
  );

  const temperatureByDay = Object.keys(days).map((date) => {
    return {
      date,
      highestTemp: Math.floor(
        days[date].reduce((prev: Forecast, current: Forecast) =>
          prev.main.temp_max > current.main.temp_max ? prev : current
        ).main.temp_max
      ),
    };
  });

  return temperatureByDay;
};
