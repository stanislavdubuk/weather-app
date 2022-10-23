import * as React from 'react';

import { CardList } from '../../components/CardList';
import { Container } from '../../components/Container';
import { Select } from '../../components/Select';

import s from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <Container>
      <div className={s.root}>
        <Select />

        <CardList />
      </div>
    </Container>
  );
};
