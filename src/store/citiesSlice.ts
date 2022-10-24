import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ELanguage } from '../lib/enums';

type CityType = {
  name: string;
  id: number;
};

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

    setCurrentCity: (state, action: PayloadAction<boolean>) => {
      state.currentCity = action.payload;
    },

    setLanguage: (state, action: PayloadAction<ELanguage>) => {
      state.language = action.payload;
    },
  },
});

export const { add, remove, hydrate, setCurrentCity, setLanguage } =
  citiesSlice.actions;

export default citiesSlice.reducer;
