import * as React from 'react';

import { City } from '../../store/constants';
import { Svg } from '../Svg';

import s from './Card.module.scss';

interface CardProps {
  city: City;
}

export const Card = ({ city }: CardProps) => {
  const { name, currentTemp, country, date, wind, humidity, pressure } = city;

  return (
    <li className={s.root}>
      <Svg className={s.close} src='close' width={16} height={16} />
      <div className={s.top}>
        <div className={s.info}>
          <div className={s.name}>
            {name}, {country}
          </div>
          <div className={s.date}>{date}</div>
        </div>
        <div className={s.sun}>
          <Svg src='sunny' width={24} height={24} />
          <span>Sunny</span>
        </div>
      </div>
      <div className={s.chart}>Chart</div>
      <div className={s.bottom}>
        <div>
          <div className={s.temperature}>
            {currentTemp} <span>C°|F°</span>
          </div>
          <div className={s.feels}>Feels like: {currentTemp}</div>
        </div>
        <div className={s.right}>
          <div>
            Wind: <span className={s.value}> {wind} </span>
          </div>
          <div>
            Humidity: <span className={s.value}> {humidity} </span>{' '}
          </div>
          <div>
            Pressure: <span className={s.value}> {pressure} </span>
          </div>
        </div>
      </div>
    </li>
  );
};
