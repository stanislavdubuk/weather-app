import * as React from 'react';

import s from './Search.module.scss';

export const Search = () => {
  return (
    <div className={s.root}>
      <input className={s.search} />
      <button className={s.button}>Add</button>
    </div>
  );
};
