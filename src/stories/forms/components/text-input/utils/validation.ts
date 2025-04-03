import * as yup from "yup";

import { TEXT_INPUT_KEYS, TextInputFormValues } from "./types";

export const textInputValidationSchema: yup.ObjectSchema<TextInputFormValues> =
  yup.object({
    [TEXT_INPUT_KEYS.value]: yup.string().required(),
  });
