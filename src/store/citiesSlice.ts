import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CityType = {
  name: string;
  id: number;
};

interface CitiesState {
  data: CityType[];
  currentCity: boolean;
}

const initialState: CitiesState = {
  data: [],
  currentCity: false,
};

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    hydrate: (state, action) => {
      return action.payload;
    },

    add: (state, action: PayloadAction<CityType[]>) => {
      state.data = [...action.payload, ...state.data];
    },

    remove: (state, action: PayloadAction<CityType[]>) => {
      state.data = action.payload;
    },

    setCurrentCity: (state, action: PayloadAction<boolean>) => {
      state.currentCity = action.payload;
    },
  },
});

export const { add, remove, hydrate, setCurrentCity } = citiesSlice.actions;

export default citiesSlice.reducer;
