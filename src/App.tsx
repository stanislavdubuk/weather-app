import * as React from 'react';
import i18n from './i18n';

import { Navbar } from './components/Navbar';
import { MainPage } from './pages/MainPage';

import { getCityByCoords } from './store/thunks';
import {
  useAppDispatch,
  useAppSelector,
  useCurrentLocation,
} from './lib/hooks';

const App = () => {
  const dispatch = useAppDispatch();

  const { latitude, longitude } = useCurrentLocation();

  const currentCity = useAppSelector((state) => state.cities.currentCity);
  const languageSelector = useAppSelector((state) => state.cities.language);

  React.useEffect(() => {
    if (!latitude || !longitude || currentCity) return;

    getCityByCoords(latitude, longitude, dispatch);
  }, [longitude, latitude, dispatch, currentCity]);

  React.useEffect(() => {
    i18n.changeLanguage(languageSelector);
  });

  return (
    <React.Fragment>
      <Navbar />
      <MainPage />
    </React.Fragment>
  );
};

export default App;
