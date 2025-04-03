import * as yup from "yup";

import { TEST_NAME } from "../../../mocks";

import { FormValues } from "./types";

type GetValidationSchemaProps = {
  isRequired: boolean;
  customErrorMessage?: string;
};

export const getValidationSchema = ({
  isRequired,
  customErrorMessage,
}: GetValidationSchemaProps) => {
  return yup.object({
    [TEST_NAME]: isRequired
      ? yup.string().required(customErrorMessage)
      : yup.string(),
  }) as yup.ObjectSchema<FormValues>;
};
