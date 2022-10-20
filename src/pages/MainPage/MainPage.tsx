import * as React from 'react';
import { CardList } from '../../components/CardList';

import { Container } from '../../components/Container';
import { Search } from '../../components/Search';

import s from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <Container>
      <div className={s.root}>
        <Search />

        <CardList />
      </div>
    </Container>
  );
};
