import { FC } from "react";

import { FormWrapper } from "../form-wrapper/form-wrapper";

import { FormSingleSelectProps } from "@forms/controllers/form-single-select/types";
import { FormSingleSelect } from "@forms/controllers/form-single-select/form-single-select";

import {
  SINGLE_SELECT_KEYS,
  getFormDefaultValues,
  singleSelectValidationSchema,
} from "./utils";
import { SINGLE_SELECT_OPTIONS } from "./mocks";

type SingleSelectProps = Omit<FormSingleSelectProps, "name" | "options">;

export const SingleSelect: FC<SingleSelectProps> = (props) => {
  const defaultValues = getFormDefaultValues();

  return (
    <FormWrapper
      defaultValues={defaultValues}
      validationSchema={singleSelectValidationSchema}
    >
      <FormSingleSelect
        options={SINGLE_SELECT_OPTIONS}
        name={SINGLE_SELECT_KEYS.single_select}
        {...props}
      />
    </FormWrapper>
  );
};
