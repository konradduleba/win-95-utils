import { useController } from "react-hook-form";

import {
  FormSingleSelectProps,
  SelectHandlersProps,
  SelectOption,
} from "../types";

type UseHandleValueChangeProps = Pick<
  FormSingleSelectProps,
  "name" | "options"
>;

export const useHandleValueChange = ({
  name,
  options,
}: UseHandleValueChangeProps): SelectHandlersProps => {
  const { field, fieldState } = useController({
    name,
  });

  const onHandleChange = (selectedValue: unknown) => {
    if (selectedValue) {
      const { value } = selectedValue as SelectOption;
      return field.onChange(value);
    }

    field.onChange("");
  };

  const value = options.find((option) => option.value === field.value);

  return {
    isInvalid: fieldState.invalid,
    onHandleChange,
    value,
  };
};
