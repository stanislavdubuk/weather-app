import cn from 'classnames';
import * as React from 'react';
import { GroupBase, OptionsOrGroups } from 'react-select';
import AsyncSelect from 'react-select/async';
import { useAppDispatch, useAppSelector } from '../../lib/hooks';
import { CityType, SelectOption } from '../../lib/types';
import { getCitiesByName } from '../../store/api';
import { add } from '../../store/citiesSlice';

import s from './Select.module.scss';

export const Select = () => {
  const dispatch = useAppDispatch();

  const cities = useAppSelector((state) => state.cities.data);

  const [selected, setSelected] = React.useState<CityType | null>(null);
  const [selectedValue, setSelectedValue] = React.useState<any>(null);

  const handleAddCity = () => {
    if (!selected) return;

    dispatch(add(selected));

    setSelectedValue(null);
    setSelected(null);
  };

  const handleChange = (selectedOption: SelectOption) => {
    console.log(selectedOption);
    const city = {
      name: selectedOption.value,
      id: selectedOption.id,
      country: selectedOption.country,
    };

    setSelectedValue(selectedOption);

    setSelected(city);
  };

  const handleLoadOptions = async (
    inputValue: string,
    callback: (
      options: OptionsOrGroups<SelectOption, GroupBase<SelectOption>>
    ) => void
  ) => {
    if (inputValue.length < 3) return;

    return getCitiesByName(inputValue);
  };

  const isDisabled = Boolean(
    selected && cities.map((city) => city.id).includes(selected.id)
  );

  return (
    <div className={s.root}>
      <AsyncSelect
        value={selectedValue}
        className={s.select}
        loadOptions={handleLoadOptions}
        onChange={handleChange}
        placeholder='Search...'
      />
      <button
        disabled={isDisabled}
        className={cn(s.button, { [s.disabled]: isDisabled })}
        onClick={handleAddCity}
      >
        Add
      </button>
    </div>
  );
};
