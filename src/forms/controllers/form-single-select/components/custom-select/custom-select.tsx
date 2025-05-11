import { FC } from "react";
import Select from "react-select";

import {
  Control,
  DropdownIndicator,
  IndicatorSeparator,
  MenuList,
  Option,
  Placeholder,
  SingleValue,
  ClearIndicator,
} from "./components";

import { useFormSingleSelect } from "../../hooks";

import styles from "./custom-select.module.scss";

export const CustomSelect: FC = () => {
  const {
    options,
    value,
    onHandleChange,
    placeholder,
    disabled,
    isClearable,
    isMenuOpen,
  } = useFormSingleSelect();

  return (
    <Select
      options={options}
      value={value}
      onChange={onHandleChange}
      placeholder={placeholder}
      className={styles.select}
      isSearchable={false}
      isDisabled={disabled}
      isClearable={isClearable}
      tabIndex={-1}
      components={{
        DropdownIndicator,
        IndicatorSeparator,
        SingleValue,
        Control,
        MenuList,
        Option,
        Placeholder,
        ClearIndicator,
      }}
      captureMenuScroll={false}
      menuIsOpen={isMenuOpen}
    />
  );
};
