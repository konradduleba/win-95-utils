import { FC } from "react";

import { FormCheckbox } from "@forms/controllers/form-checkbox/form-checkbox";
import { FormCheckboxProps } from "@forms/controllers/form-checkbox/types";

import { TEST_LABEL, TEST_NAME, TEST_TRIGGER_KEY } from "../../mocks";

type CheckboxProps = Omit<FormCheckboxProps, "triggerKeys" | "name" | "label">;

export const Checkbox: FC<CheckboxProps> = (props) => {
  return (
    <FormCheckbox
      {...props}
      name={TEST_NAME}
      triggerKeys={TEST_TRIGGER_KEY}
      label={TEST_LABEL}
    />
  );
};
