import * as yup from "yup";

import { TEST_NAME } from "../../../mocks";

import { FormValues } from "./types";

type GetValidationSchemaProps = {
  isRequired: boolean;
};

export const getValidationSchema = ({
  isRequired,
}: GetValidationSchemaProps) => {
  return yup.object({
    [TEST_NAME]: isRequired ? yup.string().required() : yup.string(),
  }) as yup.ObjectSchema<FormValues>;
};
