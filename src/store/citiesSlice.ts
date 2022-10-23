import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CityType = {
  name: string;
  id: number;
};

interface ApplicationState {
  data: CityType[];
  currentCity: boolean;
  language: string;
}

const initialState: ApplicationState = {
  data: [],
  currentCity: false,
  language: 'en',
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

    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const { add, remove, hydrate, setCurrentCity, setLanguage } =
  citiesSlice.actions;

export default citiesSlice.reducer;
