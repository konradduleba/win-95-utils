import { CHECKBOX_FALLBACK_VALUE } from "./consts";
import { CheckboxFormValues } from "./types";

export const getFormDefaultValues = (): CheckboxFormValues => {
  return {
    checkbox: CHECKBOX_FALLBACK_VALUE,
  };
};
