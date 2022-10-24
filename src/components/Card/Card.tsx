import * as React from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';

import { CityType } from '../../lib/types';
import { CARD_ANIMATION } from '../../lib/constants';
import { useAppSelector } from '../../lib/hooks';
import { useGetForecastByNameQuery } from '../../store/services/forecast';

import { CardTop } from './components/CardTop';
import { CardChart } from './components/CardChart';
import { CardBottom } from './components/CardBottom';
import { ETemperature } from '../../lib/enums';

import s from './Card.module.scss';

interface CardProps {
  city: CityType;
  handleRemoveCard: (cit: CityType) => void;
}

export const Card = ({ city, handleRemoveCard }: CardProps) => {
  const languageSelector = useAppSelector((state) => state.cities.language);

  const units = city.mode === ETemperature.Celsius ? 'metric' : 'imperial';
  const query = `${city.name},${city.country}&units=${units}`;

  const { data, isLoading } = useGetForecastByNameQuery(
    `${query}&lang=${languageSelector}`
  );

  if (isLoading || !data) return null;

  const temp = Math.floor(data.list[0]!.main.temp);
  const isBelowZero = units === 'metric' ? temp < 0 : temp < 32;

  return (
    <motion.li
      initial={{ scale: 0 }}
      animate={CARD_ANIMATION}
      layout
      className={cn(s.root, { [s.belowZero]: isBelowZero })}
    >
      <CardTop city={city} data={data} handleRemoveCard={handleRemoveCard} />

      <CardChart forecasts={data.list} isBelowZero={isBelowZero} />

      <CardBottom city={city} data={data} isBelowZero={isBelowZero} />
    </motion.li>
  );
};
