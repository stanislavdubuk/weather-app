export const CARD_ANIMATION = {
  scale: 1,
  transition: {
    delay: 0.5,
    type: 'tween',
  },
};

export const CHART_OPTIONS = {
  plugins: {
    tooltip: {
      callbacks: {
        title: () => '',
      },
    },
  },
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      display: true,
      ticks: {
        display: true,
      },
      grid: {
        display: false,
      },
    },
  },
};
