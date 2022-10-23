import * as React from 'react';
import { CityType } from '../../../../lib/types';
import { getLocalTime } from '../../../../lib/utils';
import { Svg } from '../../../Svg';

import s from './CardTop.module.scss';

interface CardTopProps {
  city: CityType;
  data: any;
  handleRemoveCard: (cit: CityType) => void;
}

export const CardTop = ({ city, data, handleRemoveCard }: CardTopProps) => {
  const name = data?.city.name;
  const country = data?.city.country;
  const timezone = data?.city.timezone;

  const weather = data?.list[0].weather[0].description;
  const icon = data?.list[0].weather[0].icon;

  const handleRemove = () => handleRemoveCard(city);

  return (
    <div className={s.root}>
      <Svg
        className={s.close}
        src='close'
        width={16}
        height={16}
        onClick={handleRemove}
      />
      <div className={s.info}>
        <div className={s.name}>
          {name}, {country}
        </div>
        <div className={s.date}>{getLocalTime(timezone)}</div>
      </div>
      <div className={s.weather}>
        <img className={s.icon} src={`/img/${icon}.png`} alt='icon' />
        <span>{weather}</span>
      </div>
    </div>
  );
};
