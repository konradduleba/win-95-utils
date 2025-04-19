import { useController } from "react-hook-form";

import { FormSingleSelectProps, SelectOption } from "../types";

type UseHandleValueChangeProps = Pick<
  FormSingleSelectProps,
  "name" | "options"
>;

export const useHandleValueChange = ({
  name,
  options,
}: UseHandleValueChangeProps) => {
  const { field, fieldState } = useController({
    name,
  });

  const onChange = ({ value }: SelectOption) => {
    field.onChange(value);
  };

  const value = options.find((option) => option.value === field.value);

  return {
    isInvalid: fieldState.invalid,
    onChange,
    value,
  };
};
