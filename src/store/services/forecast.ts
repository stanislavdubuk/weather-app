import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const forecastApi = createApi({
  reducerPath: 'forecastApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5/forecast',
  }),
  endpoints: (builder) => ({
    getForecastByName: builder.query<any, string>({
      query: (query) => `?q=${query}&units=metric&appid=${API_KEY}`,
    }),
  }),
});

export const { useGetForecastByNameQuery } = forecastApi;
