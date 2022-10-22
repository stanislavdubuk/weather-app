import * as React from 'react';

import { DUMMY_DATA } from '../../lib/constants';
import { useAppSelector } from '../../lib/hooks';
import { Card } from '../Card/Card';

import s from './CardList.module.scss';

export const CardList = () => {
  const citiesSelector = useAppSelector((state) => state.cities.data);

  const [cities, setCities] = React.useState(DUMMY_DATA);

  const handleRemoveCard = (id: number) => {
    const filteredArray = cities.filter((city) => city.id !== id);

    setCities(filteredArray);
  };

  const citiesToDisplay = citiesSelector.concat(cities);

  return (
    <div className={s.root}>
      <ul className={s.list}>
        {citiesToDisplay.map((city) => (
          <Card city={city} key={city.id} handleRemoveCard={handleRemoveCard} />
        ))}
      </ul>
    </div>
  );
};
