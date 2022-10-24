import * as React from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { convertCtoF } from '../../../../lib/utils';
import { ETemperature } from '../../../../lib/enums';
import { CityData } from '../../../../lib/types';

import s from './CardBottom.module.scss';

interface CardBottomProps {
  data: CityData;
  isBelowZero: boolean;
}

export const CardBottom = ({ data, isBelowZero }: CardBottomProps) => {
  const { t } = useTranslation();

  const [mode, setMode] = React.useState<ETemperature>(ETemperature.Celsius);

  const isCelsius = mode === ETemperature.Celsius;
  const isFahrenheit = mode === ETemperature.Fahrenheit;

  const handleSwitchMode = () => {
    if (isCelsius) setMode(ETemperature.Fahrenheit);
    if (isFahrenheit) setMode(ETemperature.Celsius);
  };

  const temp = Math.floor(data?.list[0].main.temp);
  const feels = Math.floor(data?.list[0].main.feels_like);
  const humidity = data?.list[0].main.humidity;
  const pressure = data?.list[0].main.pressure;
  const wind = data?.list[0].wind.speed.toFixed(1);

  const temperature = isCelsius ? temp : convertCtoF(temp);
  const feelsTemp = isCelsius ? feels : convertCtoF(feels);

  return (
    <div className={s.root}>
      <div>
        <div className={s.temperature}>
          {Boolean(temperature > 0) && '+'}
          {temperature}
          <div className={s.switch} onClick={handleSwitchMode}>
            <span className={cn({ [s.active]: isCelsius })}>C°</span>|
            <span className={cn({ [s.active]: isFahrenheit })}>F°</span>
          </div>
        </div>
        <div className={s.feels}>
          {`${t('feelsLike')}`}: {Boolean(feelsTemp > 0) && '+'}
          {feelsTemp}
        </div>
      </div>
      <div className={cn(s.right, { [s.isBelowZero]: isBelowZero })}>
        <div>
          {`${t('wind')}`}:{' '}
          <span className={s.value}>
            {wind} {`${t('ms')}`}
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
