import { SINGLE_SELECT_FALLBACK_VALUE } from "./consts";
import { SingleSelectFormValues, SINGLE_SELECT_KEYS } from "./types";

export const getFormDefaultValues = (): SingleSelectFormValues => {
  return {
    [SINGLE_SELECT_KEYS.single_select]: SINGLE_SELECT_FALLBACK_VALUE,
  };
};
