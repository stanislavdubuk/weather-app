import * as React from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';

import { Svg } from '../Svg';

import { CityType } from '../../lib/types';
import { CARD_ANIMATION } from '../../lib/constants';
import { useGetForecastByNameQuery } from '../../store/services/forecast';
import { convertCtoF, getLocalTime } from '../../lib/utils';

import s from './Card.module.scss';

interface CardProps {
  city: CityType;
  handleRemoveCard: (cit: CityType) => void;
}

export const Card = ({ city, handleRemoveCard }: CardProps) => {
  const { data, isLoading } = useGetForecastByNameQuery(city.name);

  const [mode, setMode] = React.useState('celsius');

  const name = data?.city.name;
  const country = data?.city.country;
  // const id = data?.city.id;
  const timezone = data?.city.timezone;

  const temp = Math.floor(data?.list[0].main.temp);
  const feels = Math.floor(data?.list[0].main.feels_like);
  const humidity = data?.list[0].main.humidity;
  const pressure = data?.list[0].main.pressure;
  const wind = data?.list[0].wind.speed.toFixed(1);

  const handleSwitchMode = () => {
    if (mode === 'celsius') setMode('fahrenheit');
    if (mode === 'fahrenheit') setMode('celsius');
  };

  const temperature = mode === 'celsius' ? temp : convertCtoF(temp);
  const feelsTemp = mode === 'celsius' ? feels : convertCtoF(feels);

  const handleRemove = () => handleRemoveCard(city);

  if (isLoading) return null;

  return (
    <motion.li
      initial={{ scale: 0 }}
      animate={CARD_ANIMATION}
      layout
      className={cn(s.root)}
    >
      <Svg
        className={s.close}
        src='close'
        width={16}
        height={16}
        onClick={handleRemove}
      />
      <div className={s.top}>
        <div className={s.info}>
          <div className={s.name}>
            {name}, {country}
          </div>
          <div className={s.date}>{getLocalTime(timezone)}</div>
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
            {Boolean(temperature > 0) && '+'}
            {temperature}
            <div className={s.switch} onClick={handleSwitchMode}>
              <span className={cn({ [s.active]: mode === 'celsius' })}>C°</span>
              |
              <span className={cn({ [s.active]: mode === 'fahrenheit' })}>
                F°
              </span>
            </div>
          </div>
          <div className={s.feels}>
            Feels like: {Boolean(feelsTemp > 0) && '+'}
            {feelsTemp}
          </div>
        </div>
        <div className={s.right}>
          <div>
            Wind: <span className={s.value}> {wind} m/s </span>
          </div>
          <div>
            Humidity: <span className={s.value}> {humidity}% </span>{' '}
          </div>
          <div>
            Pressure: <span className={s.value}> {pressure}Pa </span>
          </div>
        </div>
      </div>
    </motion.li>
  );
};
