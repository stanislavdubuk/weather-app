// import { updateStart, updateSuccess, updateFailed } from './countriesSlice';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const getForecast = async (
  city: string,
  dispatch: any,
  units?: string
) => {
  const selectedUnits = units ? `&units=${units}` : '';

  //   dispatch(updateStart());
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}${selectedUnits}&appid=${API_KEY}`
    );

    console.log(res.data);

    // dispatch(updateSuccess(res.data));
  } catch (err) {
    console.error(err);
    // dispatch(updateFailed());
  }
};

export const getCityByCoords = async (lat: string, lon: string) => {
  try {
    const res = await axios.get(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );

    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
};
