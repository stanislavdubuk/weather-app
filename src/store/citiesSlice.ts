import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type cityType = {
  name: string;
  id: number;
};

interface CitiesState {
  data: cityType[];

  isLoading: boolean;
  error: boolean;
}

const initialState: CitiesState = {
  data: [],

  isLoading: false,
  error: false,
};

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<cityType>) => {
      state.data = [action.payload, ...state.data];
    },

    updateStart: (state) => {
      state.isLoading = true;
    },
    updateSuccess: (state, action: any) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    updateFailed: (state) => {
      state.error = true;
      state.isLoading = false;
    },
  },
});

export const { addCity, updateStart, updateSuccess, updateFailed } =
  citiesSlice.actions;

export default citiesSlice.reducer;
