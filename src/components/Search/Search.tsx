import * as React from 'react';
import { useAppDispatch } from '../../lib/hooks';
import { addCity } from '../../store/citiesSlice';

import s from './Search.module.scss';

export const Search = () => {
  const dispatch = useAppDispatch();

  const [searchQuery, setSearchQuery] = React.useState<string>('');

  const handleSearchQuery = (query: React.ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(query.currentTarget.value);

  const handleAdd = () => {
    const city = {
      id: Math.floor(Math.random() * 2000),
      name: searchQuery,
    };

    dispatch(addCity(city));
  };

  return (
    <div className={s.root}>
      <input
        className={s.search}
        value={searchQuery}
        onChange={(query) => handleSearchQuery(query)}
      />
      <button className={s.button} onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};
