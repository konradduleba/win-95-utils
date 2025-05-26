import { FC } from "react";

import { FormNumberInputContext } from "./form-number-input.context";

import { FormNumberInputProps, FormNumberInputContextProps } from "./types";

import { Actions, Input, InputWrapper, Label, Wrapper } from "./components";

import { useHandleValueChange } from "./hooks";

export const FormNumberInput: FC<FormNumberInputProps> = (props) => {
  const { name, disabled, max, min, step } = props;

  const {
    isInvalid,
    onHandleChange,
    onBlur,
    value,
    onDecrementValue,
    onIncrementValue,
  } = useHandleValueChange({
    name,
    disabled,
    max,
    min,
    step,
  });

  const properties: FormNumberInputContextProps = {
    isInvalid,
    onHandleChange,
    value,
    onDecrementValue,
    onBlur,
    onIncrementValue,
    ...props,
  };

  return (
    <FormNumberInputContext.Provider value={properties}>
      <Wrapper>
        <Label />
        <InputWrapper>
          <Input />
          <Actions />
        </InputWrapper>
      </Wrapper>
    </FormNumberInputContext.Provider>
  );
};
