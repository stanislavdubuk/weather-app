export const CARD_ANIMATION = {
  scale: 1,
  transition: {
    delay: 0.5,
    type: 'tween',
  },
};

export const DUMMY_DATA = [
  {
    id: 1,
    name: 'Toronto',
  },
  {
    id: 2,
    name: 'Calgary',
  },
  {
    id: 3,
    name: 'Moscow',
  },
  {
    id: 4,
    name: 'New York',
  },
  {
    id: 5,
    name: 'Athens',
  },
  {
    id: 6,
    name: 'Istanbul',
  },
  {
    id: 7,
    name: 'Toronto',
  },
  {
    id: 8,
    name: 'Toronto',
  },
  {
    id: 9,
    name: 'Toronto',
  },
  {
    id: 10,
    name: 'Toronto',
  },
  {
    id: 11,
    name: 'Toronto',
  },
  {
    id: 12,
    name: 'Toronto',
  },
  {
    id: 13,
    name: 'Toronto',
  },
  {
    id: 14,
    name: 'Toronto',
  },
];

export type CityType = {
  id: number;
  name: string;
  country: string;
  sunny: boolean;
  date: string;
  currentTemp: string;
  wind: string;
  humidity: string;
  pressure: string;
};
