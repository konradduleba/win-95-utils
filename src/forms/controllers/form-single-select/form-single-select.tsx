import { FC } from "react";
import Select from "react-select";

import {
  FormSingleSelectContextProps,
  FormSingleSelectProps,
  SelectOption,
} from "./types";

import {
  DropdownIndicator,
  IndicatorSeparator,
  SingleValue,
  Control,
  MenuList,
  Option,
  Placeholder,
} from "./components";

import { useHandleValueChange } from "./hooks";

import { FormSingleSelectContext } from "./form-single-select.context";

import styles from "./form-single-select.module.scss";

export const FormSingleSelect: FC<FormSingleSelectProps> = ({
  name,
  options,
  placeholder,
  disabled,
}) => {
  const { isInvalid, onChange, value } = useHandleValueChange({
    name,
    options,
  });

  const properties: FormSingleSelectContextProps = {
    isInvalid,
  };

  return (
    <FormSingleSelectContext.Provider value={properties}>
      <Select
        options={options}
        value={value}
        onChange={(selectedOption) => onChange(selectedOption as SelectOption)}
        placeholder={placeholder}
        className={styles.select}
        isSearchable={false}
        isDisabled={disabled}
        tabIndex={-1}
        components={{
          DropdownIndicator,
          IndicatorSeparator,
          SingleValue,
          Control,
          MenuList,
          Option,
          Placeholder,
        }}
        menuIsOpen
        captureMenuScroll={false}
      />
    </FormSingleSelectContext.Provider>
  );
};
