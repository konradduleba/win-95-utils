import { FC } from "react";

import { FormSingleSelectContextProps, FormSingleSelectProps } from "./types";

import { Wrapper, Label, CustomSelect } from "./components";

import { useHandleValueChange } from "./hooks";

import { FormSingleSelectContext } from "./form-single-select.context";

export const FormSingleSelect: FC<FormSingleSelectProps> = (props) => {
  const { name, options, isMenuOpen } = props;

  const { isInvalid, onHandleChange, value } = useHandleValueChange({
    name,
    options,
  });

  const properties: FormSingleSelectContextProps = {
    ...props,
    isMenuOpen: isMenuOpen ? true : undefined,
    isInvalid,
    name,
    value,
    onHandleChange,
  };

  return (
    <FormSingleSelectContext.Provider value={properties}>
      <Wrapper>
        <Label />
        <CustomSelect />
      </Wrapper>
    </FormSingleSelectContext.Provider>
  );
};
