import * as yup from "yup";

import {
  RADIOBOX_KEYS,
  RadioboxFormValues,
  RadioboxOptionValue,
} from "./types";

export const radioboxValidationSchema: yup.ObjectSchema<RadioboxFormValues> =
  yup.object({
    [RADIOBOX_KEYS.radiobox]: yup
      .mixed<RadioboxOptionValue>()
      .oneOf([
        RADIOBOX_KEYS.option_one,
        RADIOBOX_KEYS.option_two,
        RADIOBOX_KEYS.option_three,
      ])
      .required(),
  });
