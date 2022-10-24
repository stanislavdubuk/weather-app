import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ELanguage } from '../lib/enums';
import { CityType } from '../lib/types';

interface ApplicationState {
  data: CityType[];
  currentCity: boolean;
  language: ELanguage;
}

const initialState: ApplicationState = {
  data: [],
  currentCity: false,
  language: ELanguage.EN,
};

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    hydrate: (state, action) => {
      return action.payload;
    },

    add: (state, action: PayloadAction<CityType>) => {
      state.data = [...state.data, action.payload];
    },

    remove: (state, action: PayloadAction<CityType[]>) => {
      state.data = action.payload;
    },

    setTemperatureMode: (state, action: PayloadAction<CityType>) => {
      state.data = state.data.map((city: CityType) => {
        if (city.id === action.payload.id) {
          return {
            ...city,
            mode: action.payload.mode,
          };
        }

        return city;
      });
    },

    setCurrentCity: (state, action: PayloadAction<boolean>) => {
      state.currentCity = action.payload;
    },

    setLanguage: (state, action: PayloadAction<ELanguage>) => {
      state.language = action.payload;
    },
  },
});

export const {
  add,
  remove,
  hydrate,
  setTemperatureMode,
  setCurrentCity,
  setLanguage,
} = citiesSlice.actions;

export default citiesSlice.reducer;
