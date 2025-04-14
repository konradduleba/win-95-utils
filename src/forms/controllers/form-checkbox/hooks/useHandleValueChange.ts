import { useController } from "react-hook-form";

import { InputHandlersProps, FormCheckboxProps } from "../types";
import { KeyboardEvent } from "react";

type UseHandleValueChangeProps = Pick<FormCheckboxProps, "name" | "disabled">;

export const useHandleValueChange = ({
  name,
  disabled,
}: UseHandleValueChangeProps): InputHandlersProps => {
  const { field, fieldState } = useController({ name });
  const isChecked = field.value;
  const isInvalid = disabled ? false : fieldState.invalid;

  const onHandleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = target.checked;
    field.onChange(inputValue);
  };

  const onKeyPress = (e: KeyboardEvent<HTMLLabelElement>) => {
    if ((e.key === " " || e.key === "Enter") && !disabled) {
      e.preventDefault();
      field.onChange(!isChecked);
    }
  };

  return {
    onHandleChange,
    onKeyPress,
    isChecked,
    isInvalid,
  };
};
