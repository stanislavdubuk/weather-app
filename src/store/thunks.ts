import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';

import { add, setCurrentCity } from './citiesSlice';
import { CitySearchType } from '../lib/types';
import { ETemperature } from '../lib/enums';

const API_KEY = '50f1413b72d5eb20783f3d5e09ac2865';
const SEARCH_API_KEY = 'qQkPKLawjqMGEAhS5xQaQg==XWLoGrOxDKjuaNCQ';

export const getCityByCoords = async (
  lat: string,
  lon: string,
  dispatch: Dispatch
) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );

    const city = {
      id: Math.floor(Math.random() * 2000),
      name: res.data[0].name,
      mode: ETemperature.Celsius,
      country: res.data[0].country,
    };

    dispatch(add(city));
    dispatch(setCurrentCity(true));
  } catch (err) {
    console.error(err);
  }
};

export const getCitiesByName = async (cityName: string) => {
  try {
    const config = {
      headers: { 'X-Api-Key': SEARCH_API_KEY },
    };

    const res = await axios.get(
      `https://api.api-ninjas.com/v1/city?name=${cityName}&limit=5`,
      config
    );

    const options = res.data.map(function (item: CitySearchType) {
      return {
        value: item.name,
        label: `${item.name}, ${item.country}`,
        country: item.country,
        id: item.population,
      };
    });

    return options;
  } catch (err) {
    console.error(err);
  }
};
