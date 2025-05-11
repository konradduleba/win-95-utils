import { FC } from "react";

import { FormSingleSelectProps } from "@forms/controllers/form-single-select/types";
import { FormSingleSelect } from "@forms/controllers/form-single-select/form-single-select";

import {
  TEST_NAME,
  TEST_SINGLE_SELECT_OPTIONS,
  TEST_TRIGGER_KEY,
} from "../../mocks";

type SelectProps = Omit<
  FormSingleSelectProps,
  "triggerKeys" | "name" | "options"
>;

export const Select: FC<SelectProps> = (props) => {
  return (
    <FormSingleSelect
      name={TEST_NAME}
      triggerKeys={TEST_TRIGGER_KEY}
      options={TEST_SINGLE_SELECT_OPTIONS}
      {...props}
    />
  );
};
