import * as yup from "yup";

import { TEST_NAME } from "../../../mocks";

import { FormValues } from "./types";

type GetValidationSchemaProps = {
  isRequired: boolean;
};

export const getValidationSchema = ({
  isRequired,
}: GetValidationSchemaProps): yup.ObjectSchema<FormValues> => {
  const options: boolean[] = isRequired ? [true] : [true, false];

  return yup.object({
    [TEST_NAME]: yup.boolean().oneOf(options).required(),
  });
};
