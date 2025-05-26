import { NUMBER_INPUT_FALLBACK_VALUE } from "./consts";
import { NumberInputFormValues } from "./types";

export const getFormDefaultValues = (): NumberInputFormValues => {
  return {
    value: NUMBER_INPUT_FALLBACK_VALUE,
  };
};
