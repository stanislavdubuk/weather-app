import * as React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';

import { getHighestTempByDay } from '../../../../lib/utils';
import { CHART_OPTIONS } from '../../../../lib/constants';

import s from './CardChart.module.scss';

interface CardChartProps {
  forecasts: any;
  isBelowZero: boolean;
}

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

export const CardChart = ({ forecasts, isBelowZero }: CardChartProps) => {
  const chartData = getHighestTempByDay(forecasts);

  const labels = chartData.map((data) => data.date.split('-')[2]);
  const temperature = chartData.map((data) => data.highestTemp);

  const data = {
    labels: labels,
    datasets: [
      {
        data: temperature,
        backgroudColor: 'transparent',
        borderColor: isBelowZero ? '#5076ff' : '#eb9e10',
        pointBorderColor: 'transparent',
        tension: 0.5,
      },
    ],
  };

  return (
    <div className={s.root}>
      <Line data={data} options={CHART_OPTIONS} />
    </div>
  );
};
