import { FC } from "react";

import { FormCheckboxProps } from "@forms/controllers/form-checkbox/types";
import { FormCheckbox } from "@forms/controllers/form-checkbox/form-checkbox";

import { FormWrapper } from "../form-wrapper/form-wrapper";

import {
  CHECKBOX_KEYS,
  getFormDefaultValues,
  getCheckboxValidationSchema,
} from "./utils";

type CheckboxProps = Omit<FormCheckboxProps, "name"> & {
  required: boolean;
};

export const Checkbox: FC<CheckboxProps> = (props) => {
  const { required } = props;
  const defaultValues = getFormDefaultValues();
  const validationSchema = getCheckboxValidationSchema({ required });

  return (
    <FormWrapper
      defaultValues={defaultValues}
      validationSchema={validationSchema}
    >
      <FormCheckbox name={CHECKBOX_KEYS.checkbox} {...props} />
    </FormWrapper>
  );
};
