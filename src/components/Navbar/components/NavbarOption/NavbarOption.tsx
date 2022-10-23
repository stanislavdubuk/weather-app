import * as React from 'react';

import { Svg } from '../../../Svg';

import s from './NavbarOption.module.scss';

interface NavbarOptionProps {
  option: {
    value: string;
    label: string;
  };
  handleLanguageChange: (value: string) => void;
  isChosen: boolean;
}

export const NavbarOption = ({
  option,
  isChosen,
  handleLanguageChange,
}: NavbarOptionProps) => {
  return (
    <div className={s.root} onClick={() => handleLanguageChange(option.value)}>
      <span>{option.label}</span>
      {isChosen && <Svg src='checkmark' width={16} height={16} />}
    </div>
  );
};
