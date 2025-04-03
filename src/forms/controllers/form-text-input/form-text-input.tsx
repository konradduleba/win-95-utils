import { FC } from "react";

import { FormTextInputContext } from "./form-text-input.context";

import { FormTextInputContextProps, FormTextInputProps } from "./types";

import { ErrorMessage, Input, Label, Wrapper } from "./components";

import { useHandleValueChange } from "./hooks";

export const FormTextInput: FC<FormTextInputProps> = (props) => {
  const { name } = props;

  const { isInvalid, onHandleChange, value, errorMessage } =
    useHandleValueChange({ name });

  const properties: FormTextInputContextProps = {
    isInvalid,
    onHandleChange,
    value,
    errorMessage,
    ...props,
  };

  return (
    <FormTextInputContext.Provider value={properties}>
      <Wrapper>
        <Label />
        <Input />
        <ErrorMessage />
      </Wrapper>
    </FormTextInputContext.Provider>
  );
};
