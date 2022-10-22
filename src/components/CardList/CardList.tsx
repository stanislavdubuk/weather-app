import * as React from 'react';

import { useAppDispatch, useAppSelector } from '../../lib/hooks';
import { CityType } from '../../lib/types';
import { remove } from '../../store/citiesSlice';
import { Card } from '../Card/Card';

import s from './CardList.module.scss';

export const CardList = () => {
  const dispatch = useAppDispatch();

  const cities = useAppSelector((state) => state.cities.data);

  const handleRemoveCard = (city: CityType) => {
    const filteredArray = cities.filter((cit) => cit.id !== city.id);

    dispatch(remove(filteredArray));
  };

  return (
    <div className={s.root}>
      <ul className={s.list}>
        {cities.map((city) => (
          <Card city={city} key={city.id} handleRemoveCard={handleRemoveCard} />
        ))}
      </ul>
    </div>
  );
};
