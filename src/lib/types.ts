export type CityType = {
  id: number;
  name: string;
  country?: string;
};

export type SelectOption = {
  value: string;
  label: string;
  country: string;
  id: number;
};

export type CitySearchType = {
  name: string;
  country: string;
  population: number;
};

export type Forecast = {
  dt_txt: string;
  main: {
    temp: number;
    temp_max: number;
    humidity: number;
    pressure: number;
    feels_like: number;
  };
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
  wind: {
    speed: number;
  };
};
export type CityData = {
  city: {
    name: string;
    country: string;
    timezone: number;
  };
  list: Forecast[];
};
