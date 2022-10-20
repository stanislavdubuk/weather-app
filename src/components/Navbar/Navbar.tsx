import * as React from 'react';

import { Container } from '../Container';
import { Svg } from '../Svg';

import s from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <div className={s.root}>
      <Container>
        <div className={s.languageContainer}>
          <div className={s.selector}>
            <Svg src='earth' width={24} height={24} className={s.icon} />
            <span>EN</span>
          </div>
        </div>
      </Container>
    </div>
  );
};
