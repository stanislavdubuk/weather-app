import * as React from 'react';

import { Svg } from '../../../Svg';

import { ELanguage, ELocale } from '../../../../lib/enums';
import { useAppSelector } from '../../../../lib/hooks';
import { CityData, CityType } from '../../../../lib/types';
import { getLocalTime } from '../../../../lib/utils';

import s from './CardTop.module.scss';

interface CardTopProps {
  city: CityType;
  data: CityData;
  handleRemoveCard: (cit: CityType) => void;
}

export const CardTop = ({ city, data, handleRemoveCard }: CardTopProps) => {
  const langagueSelector = useAppSelector((state) => state.cities.language);

  const handleRemove = () => handleRemoveCard(city);

  const name = data?.city.name;
  const country = data?.city.country;
  const timezone = data?.city.timezone;
  const weather = data?.list[0].weather[0].description;
  const icon = data?.list[0].weather[0].icon;

  const locale =
    langagueSelector === ELanguage.EN
      ? ELocale.EN
      : langagueSelector === ELanguage.RU
      ? ELocale.RU
      : ELocale.UA;

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
        <div className={s.date}>{getLocalTime(timezone, locale)}</div>
      </div>
      <div className={s.weather}>
        <img
          className={s.icon}
          src={`/weather-app/img/${icon}.png`}
          alt='icon'
        />
        <span>{weather}</span>
      </div>
    </div>
  );
};
