import { FC } from "react";

import { FormWrapper } from "../form-wrapper/form-wrapper";

import { FormSingleSelectProps } from "@forms/controllers/form-single-select/types";
import { FormSingleSelect } from "@forms/controllers/form-single-select/form-single-select";

import {
  SINGLE_SELECT_KEYS,
  getFormDefaultValues,
  singleSelectValidationSchema,
} from "./utils";

type SingleSelectProps = Omit<FormSingleSelectProps, "name">;

export const SingleSelect: FC<SingleSelectProps> = (props) => {
  const defaultValues = getFormDefaultValues();

  return (
    <FormWrapper
      defaultValues={defaultValues}
      validationSchema={singleSelectValidationSchema}
    >
      <FormSingleSelect name={SINGLE_SELECT_KEYS.single_select} {...props} />
    </FormWrapper>
  );
};
