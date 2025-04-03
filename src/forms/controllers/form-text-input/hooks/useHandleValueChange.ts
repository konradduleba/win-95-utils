import { useController } from "react-hook-form";

import { InputHandlersProps, FormTextInputProps } from "../types";

type UseHandleValueChangeProps = Pick<FormTextInputProps, "name">;

export const useHandleValueChange = ({
  name,
}: UseHandleValueChangeProps): InputHandlersProps => {
  const { field, fieldState } = useController({ name });

  const onHandleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = target.value;
    field.onChange(inputValue);
  };

  return {
    onHandleChange,
    value: field.value,
    isInvalid: fieldState.invalid,
    errorMessage: fieldState.error?.message,
  };
};
