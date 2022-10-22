import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import { AppDispatch, RootState } from '../store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCurrentLocation = () => {
  const location = navigator.geolocation;

  const [position, setPosition] = React.useState<GeolocationPosition | null>(
    null
  );

  React.useEffect(() => {
    location.getCurrentPosition((position) => setPosition(position));
  }, [location]);

  return {
    latitude: position?.coords.latitude.toString(),
    longitude: position?.coords.longitude.toString(),
  };
};
