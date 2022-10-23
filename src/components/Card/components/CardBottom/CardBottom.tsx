import * as React from 'react';
import cn from 'classnames';

import { convertCtoF } from '../../../../lib/utils';

import s from './CardBottom.module.scss';

interface CardBottomProps {
  data: any;
  isBelowZero: boolean;
}

export const CardBottom = ({ data, isBelowZero }: CardBottomProps) => {
  const [mode, setMode] = React.useState('celsius');

  const handleSwitchMode = () => {
    if (mode === 'celsius') setMode('fahrenheit');
    if (mode === 'fahrenheit') setMode('celsius');
  };

  const temp = Math.floor(data?.list[0].main.temp);
  const feels = Math.floor(data?.list[0].main.feels_like);
  const humidity = data?.list[0].main.humidity;
  const pressure = data?.list[0].main.pressure;
  const wind = data?.list[0].wind.speed.toFixed(1);

  const temperature = mode === 'celsius' ? temp : convertCtoF(temp);
  const feelsTemp = mode === 'celsius' ? feels : convertCtoF(feels);

  return (
    <div className={s.root}>
      <div>
        <div className={s.temperature}>
          {Boolean(temperature > 0) && '+'}
          {temperature}
          <div className={s.switch} onClick={handleSwitchMode}>
            <span className={cn({ [s.active]: mode === 'celsius' })}>C°</span>|
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
      <div className={cn(s.right, { [s.isBelowZero]: isBelowZero })}>
        <div>
          Wind: <span className={s.value}> {wind} m/s </span>
        </div>
        <div>
          Humidity: <span className={s.value}> {humidity}% </span>{' '}
        </div>
        <div>
          Pressure: <span className={s.value}> {pressure} Pa </span>
        </div>
      </div>
    </div>
  );
};
