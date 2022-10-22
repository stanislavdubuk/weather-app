import * as React from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';

import { Svg } from '../Svg';

import { CARD_ANIMATION } from '../../lib/constants';
import { useGetForecastByNameQuery } from '../../store/services/forecast';

import s from './Card.module.scss';

interface CardProps {
  city: {
    id: number;
    name: string;
  };
  handleRemoveCard: (id: number) => void;
}

export const Card = ({ city, handleRemoveCard }: CardProps) => {
  const { data, error, isLoading } = useGetForecastByNameQuery(city.name);

  React.useEffect(() => {
    if (!data) return;
    console.log(data);
  }, [data]);

  if (isLoading) return null;

  const name = data?.city.name;
  const country = data?.city.country;
  const id = data?.city.id;

  const date = data?.list[0].dt_txt;
  const temperature = Math.floor(data?.list[0].main.temp);
  const feelsLike = data?.list[0].main.feels_like;
  const humidity = data?.list[0].main.humidity;
  const pressure = data?.list[0].main.pressure;
  const wind = data?.list[0].wind.speed;

  const handleRemove = () => handleRemoveCard(id);

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
            +{temperature} <span> C°|F°</span>
          </div>
          <div className={s.feels}>Feels like: {feelsLike}</div>
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
