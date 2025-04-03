import { TEXT_INPUT_FALLBACK_VALUE } from "./consts";
import { TextInputFormValues } from "./types";

export const getFormDefaultValues = (): TextInputFormValues => {
  return {
    value: TEXT_INPUT_FALLBACK_VALUE,
  };
};
