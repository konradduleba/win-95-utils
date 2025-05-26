import * as yup from "yup";

import { NUMBER_INPUT_KEYS, NumberInputFormValues } from "./types";

export const numberInputValidationSchema: yup.ObjectSchema<NumberInputFormValues> =
  yup.object({
    [NUMBER_INPUT_KEYS.value]: yup.string().required(),
  });
