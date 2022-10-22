import * as React from 'react';
import { Navbar } from './components/Navbar';
import {
  useAppDispatch,
  useAppSelector,
  useCurrentLocation,
} from './lib/hooks';

import { MainPage } from './pages/MainPage/MainPage';
import { getCityByCoords } from './store/api';

const App = () => {
  const dispatch = useAppDispatch();

  const { latitude, longitude } = useCurrentLocation();

  const currentCity = useAppSelector((state) => state.cities.currentCity);

  React.useEffect(() => {
    if (!latitude || !longitude || currentCity) return;

    getCityByCoords(latitude, longitude, dispatch);
  }, [longitude, latitude, dispatch, currentCity]);

  return (
    <React.Fragment>
      <Navbar />
      <MainPage />
    </React.Fragment>
  );
};

export default App;
