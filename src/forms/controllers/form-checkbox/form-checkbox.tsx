import { FC } from "react";

import { FormCheckboxContext } from "./form-checkbox.context";

import { FormCheckboxContextProps, FormCheckboxProps } from "./types";

import { Input, Label, Wrapper } from "./components";

import { useHandleValueChange } from "./hooks";

export const FormCheckbox: FC<FormCheckboxProps> = (props) => {
  const { name, disabled } = props;

  const { isInvalid, onHandleChange, isChecked, onKeyPress } =
    useHandleValueChange({
      name,
      disabled,
    });

  const properties: FormCheckboxContextProps = {
    isInvalid,
    isChecked,
    onHandleChange,
    onKeyPress,
    ...props,
  };

  return (
    <FormCheckboxContext.Provider value={properties}>
      <Wrapper>
        <Input />
        <Label />
      </Wrapper>
    </FormCheckboxContext.Provider>
  );
};
