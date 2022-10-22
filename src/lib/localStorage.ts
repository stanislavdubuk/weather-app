import { store } from '../store';
import { hydrate } from '../store/citiesSlice';

export const getLocalStorage = () => {
  const getLocalCities = () => {
    try {
      const persistedState = localStorage.getItem('cities');

      if (persistedState) return JSON.parse(persistedState);
    } catch (err) {
      console.error(err);
    }
  };

  const cities = getLocalCities();

  if (cities) {
    store.dispatch(hydrate(cities));
  }
};
