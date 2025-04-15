import { RadioboxFormValues, RadioboxOptionValue } from "./types";

type GetFormDefaultValuesProps = {
  initialValue?: RadioboxOptionValue;
};

export const getFormDefaultValues = ({
  initialValue,
}: GetFormDefaultValuesProps): RadioboxFormValues => {
  return {
    radiobox: initialValue,
  };
};
