import { FC } from "react";

import { FormRadioboxContext } from "./form-radiobox.context";

import { FormRadioboxContextProps, FormRadioboxProps } from "./types";

import { Label, Wrapper } from "./components";

import { useHandleValueChange } from "./hooks";

export const FormRadiobox: FC<FormRadioboxProps> = (props) => {
  const { name, disabled, value } = props;

  const { isInvalid, onHandleChange, isSelected, onKeyPress } =
    useHandleValueChange({
      name,
      disabled,
      value,
    });

  const properties: FormRadioboxContextProps = {
    isInvalid,
    isSelected,
    onHandleChange,
    onKeyPress,
    ...props,
  };

  return (
    <FormRadioboxContext.Provider value={properties}>
      <Wrapper>
        <Label />
      </Wrapper>
    </FormRadioboxContext.Provider>
  );
};
