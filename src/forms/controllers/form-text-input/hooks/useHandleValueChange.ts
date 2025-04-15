import { useController } from "react-hook-form";

import { InputHandlersProps, FormTextInputProps } from "../types";

type UseHandleValueChangeProps = Pick<FormTextInputProps, "name" | "disabled">;

export const useHandleValueChange = ({
  name,
  disabled,
}: UseHandleValueChangeProps): InputHandlersProps => {
  const { field, fieldState } = useController({ name });

  const onHandleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = target.value;
    field.onChange(inputValue);
  };

  return {
    onHandleChange,
    value: field.value,
    isInvalid: disabled ? false : fieldState.invalid,
    errorMessage: fieldState.error?.message,
  };
};
