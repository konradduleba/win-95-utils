import { FC } from "react";

import { FormWrapper } from "../form-wrapper/form-wrapper";

import {
  NUMBER_INPUT_KEYS,
  getFormDefaultValues,
  numberInputValidationSchema,
} from "./utils";

import { FormNumberInputProps } from "@forms/controllers/form-number-input/types";
import { FormNumberInput } from "@forms/controllers/form-number-input/form-number-input";

type NumberInputProps = Omit<FormNumberInputProps, "name">;

export const NumberInput: FC<NumberInputProps> = (props) => {
  const defaultValues = getFormDefaultValues();

  return (
    <FormWrapper
      defaultValues={defaultValues}
      validationSchema={numberInputValidationSchema}
    >
      <FormNumberInput name={NUMBER_INPUT_KEYS.value} {...props} />
    </FormWrapper>
  );
};
