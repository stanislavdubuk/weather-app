export const getLocalTime = (timezone: number) => {
  const d = new Date();
  const localTime = d.getTime();
  const localOffset = d.getTimezoneOffset() * 60000;
  const utc = localTime + localOffset;
  const date = utc + 1000 * timezone;

  const dateObj = new Date(date);

  const hours =
    dateObj.getHours() < 10 ? `0${dateObj.getHours()}` : dateObj.getHours();

  const minutes =
    dateObj.getMinutes() < 10
      ? `0${dateObj.getMinutes()}`
      : dateObj.getMinutes();

  return `${dateObj.getDate()} ${dateObj.toLocaleString('default', {
    month: 'long',
  })}, ${hours}:${minutes}`;
};

export const convertCtoF = (celsius: number) =>
  Math.floor((celsius * 9) / 5 + 32);

export const getHighestTempByDay = (forecasts: any) => {
  const days = forecasts.reduce((days: any, forecast: any) => {
    const date = forecast.dt_txt.split(' ')[0];

    if (!days[date]) {
      days[date] = [];
    }

    days[date].push(forecast);

    return days;
  }, {});

  const temperatureByDay = Object.keys(days).map((date) => {
    return {
      date,
      highestTemp: Math.floor(
        days[date].reduce((prev: any, current: any) =>
          prev.main.temp_max > current.main.temp_max ? prev : current
        ).main.temp_max
      ),
    };
  });

  return temperatureByDay;
};
