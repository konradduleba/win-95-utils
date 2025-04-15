import { KeyboardEvent } from "react";
import { useController } from "react-hook-form";

import { InputHandlersProps, FormRadioboxProps } from "../types";

type UseHandleValueChangeProps = Pick<
  FormRadioboxProps,
  "name" | "disabled" | "value"
>;

export const useHandleValueChange = ({
  name,
  disabled,
  value,
}: UseHandleValueChangeProps): InputHandlersProps => {
  const { field, fieldState } = useController({ name });

  const isInvalid = disabled ? false : fieldState.invalid;

  const onHandleChange = () => {
    if (!disabled) {
      field.onChange(value);
    }
  };

  const onKeyPress = (event: KeyboardEvent<HTMLLabelElement>) => {
    if ((event.key === " " || event.key === "Enter") && !disabled) {
      event.preventDefault();
      field.onChange(value);
    }
  };

  return {
    onHandleChange,
    onKeyPress,
    isSelected: field.value === value,
    isInvalid,
  };
};
