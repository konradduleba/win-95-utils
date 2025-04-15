import * as yup from "yup";

import { FormValues, RADIOBOX_KEYS } from "./types";
import { TEST_NAME } from "../../../mocks";

export const radioboxValidationSchema: yup.ObjectSchema<FormValues> =
  yup.object({
    [TEST_NAME]: yup
      .mixed<RADIOBOX_KEYS>()
      .oneOf([
        RADIOBOX_KEYS.option_one,
        RADIOBOX_KEYS.option_two,
        RADIOBOX_KEYS.option_three,
      ])
      .required(),
  });
