import * as React from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { ETemperature } from '../../../../lib/enums';
import { CityData, CityType } from '../../../../lib/types';
import { useAppDispatch } from '../../../../lib/hooks';
import { setTemperatureMode } from '../../../../store/citiesSlice';

import s from './CardBottom.module.scss';

interface CardBottomProps {
  data: CityData;
  city: CityType;
  isBelowZero: boolean;
}

export const CardBottom = ({ data, city, isBelowZero }: CardBottomProps) => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const isCelsius = city.mode === ETemperature.Celsius;
  const isFahrenheit = city.mode === ETemperature.Fahrenheit;

  const handleSwitchMode = () =>
    dispatch(
      setTemperatureMode({
        ...city,
        mode: isCelsius ? ETemperature.Fahrenheit : ETemperature.Celsius,
      })
    );

  const temp = Math.floor(data?.list[0].main.temp);
  const feels = Math.floor(data?.list[0].main.feels_like);
  const humidity = data?.list[0].main.humidity;
  const pressure = data?.list[0].main.pressure;
  const wind = data?.list[0].wind.speed.toFixed(1);

  return (
    <div className={s.root}>
      <div>
        <div className={s.temperature}>
          {Boolean(temp > 0) && '+'}
          {temp}
          <div className={s.switch} onClick={handleSwitchMode}>
            <span className={cn({ [s.active]: isCelsius })}>C°</span>|
            <span className={cn({ [s.active]: isFahrenheit })}>F°</span>
          </div>
        </div>
        <div className={s.feels}>
          {`${t('feelsLike')}`}: {Boolean(feels > 0) && '+'}
          {feels}
        </div>
      </div>
      <div className={cn(s.right, { [s.isBelowZero]: isBelowZero })}>
        <div>
          {`${t('wind')}`}:{' '}
          <span className={s.value}>
            {wind} {`${t(`${isCelsius ? 'ms' : 'knots'}`)}`}
          </span>
        </div>
        <div>
          {`${t('humidity')}`}: <span className={s.value}> {humidity}% </span>
        </div>
        <div>
          {`${t('pressure')}`}:{' '}
          <span className={s.value}>
            {pressure} {`${t('pa')}`}
          </span>
        </div>
      </div>
    </div>
  );
};
