// import { updateStart, updateSuccess, updateFailed } from './countriesSlice';
import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';

import { add, setCurrentCity } from './citiesSlice';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const getCityByCoords = async (
  lat: string,
  lon: string,
  dispatch: Dispatch
) => {
  try {
    const res = await axios.get(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );

    const city = {
      id: Math.floor(Math.random() * 2000),
      name: res.data[0].name,
    };

    dispatch(add([city]));
    dispatch(setCurrentCity(true));
  } catch (err) {
    console.error(err);
  }
};
