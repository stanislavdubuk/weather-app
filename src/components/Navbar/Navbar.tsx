import * as React from 'react';
import i18n from '../../i18n';
import cn from 'classnames';

import { Svg } from '../Svg';
import { Container } from '../Container';
import { NavbarOption } from './components/NavbarOption';

import { useAppDispatch, useAppSelector } from '../../lib/hooks';
import { setLanguage } from '../../store/citiesSlice';
import { LANGUAGES } from '../../lib/constants';

import s from './Navbar.module.scss';

export const Navbar = () => {
  const dispatch = useAppDispatch();

  const languageSelector = useAppSelector((state) => state.cities.language);

  const [showLangSelector, setShowLangSelector] = React.useState(false);

  const handleLanguageChange = (language: string) => {
    dispatch(setLanguage(language));

    i18n.changeLanguage(language);

    setShowLangSelector(false);
  };

  const handleShowSelector = () => setShowLangSelector(!showLangSelector);

  return (
    <div className={s.root}>
      <Container>
        <div className={s.languageContainer}>
          <div className={s.selector} onClick={handleShowSelector}>
            <Svg src='earth' width={24} height={24} className={s.icon} />
            <span>{languageSelector.toUpperCase()}</span>
            <Svg
              src='chevron-down'
              width={16}
              height={16}
              className={cn(s.arrow, { [s.active]: showLangSelector })}
            />
          </div>

          <div
            className={cn(s.dropdown, { [s.showSelector]: showLangSelector })}
          >
            {LANGUAGES.map((language) => {
              const isChosen = language.value === languageSelector;

              return (
                <NavbarOption
                  key={language.value}
                  option={language}
                  handleLanguageChange={handleLanguageChange}
                  isChosen={isChosen}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};
