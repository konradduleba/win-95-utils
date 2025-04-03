import { FC } from "react";
import Select from "react-select";
import { useController } from "react-hook-form";

import { FormSingleSelectProps, SelectOption } from "./types";

import {
  DropdownIndicator,
  IndicatorSeparator,
  SingleValue,
  Control,
  MenuList,
  Option,
} from "./components";

import styles from "./form-single-select.module.scss";

export const FormSingleSelect: FC<FormSingleSelectProps> = ({
  name,
  options,
  placeholder,
  testId,
}) => {
  const { field } = useController({
    name,
  });

  return (
    <Select
      options={options}
      value={options.find((option) => option.value === field.value)}
      onChange={(selectedOption) =>
        field.onChange((selectedOption as SelectOption)?.value)
      }
      placeholder={placeholder}
      className={styles.select}
      isSearchable={false}
      components={{
        DropdownIndicator,
        IndicatorSeparator,
        SingleValue,
        Control: (controlProps) => (
          <Control {...controlProps} testId={testId} />
        ),
        MenuList,
        Option,
      }}
    />
  );
};
