import * as yup from "yup";

import { CHECKBOX_KEYS, CheckboxFormValues } from "./types";

type GetCheckboxValidationSchemaProps = {
  required: boolean;
};

export const getCheckboxValidationSchema = ({
  required,
}: GetCheckboxValidationSchemaProps): yup.ObjectSchema<CheckboxFormValues> => {
  const options: boolean[] = required ? [true] : [true, false];

  return yup.object({
    [CHECKBOX_KEYS.checkbox]: yup.boolean().oneOf(options).required(),
  });
};
