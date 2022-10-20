import * as React from 'react';

import { DUMMY_DATA } from '../../store/constants';
import { Card } from '../Card/Card';

import s from './CardList.module.scss';

export const CardList = () => {
  const cities = DUMMY_DATA;

  return (
    <div className={s.root}>
      <ul className={s.list}>
        {cities.map((city) => (
          <Card city={city} key={city.id} />
        ))}
      </ul>
    </div>
  );
};
