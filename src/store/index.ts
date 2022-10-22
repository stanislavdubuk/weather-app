import { configureStore } from '@reduxjs/toolkit';

import citiesSlice from './citiesSlice';
import { forecastApi } from './services/forecast';

export const store = configureStore({
  reducer: {
    cities: citiesSlice,

    [forecastApi.reducerPath]: forecastApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(forecastApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
