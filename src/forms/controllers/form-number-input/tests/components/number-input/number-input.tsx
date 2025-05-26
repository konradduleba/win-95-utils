import { FC } from "react";

import { FormNumberInput } from "@forms/controllers/form-number-input/form-number-input";
import { FormNumberInputProps } from "@forms/controllers/form-number-input/types";

import {
  TEST_MAX_VALUE,
  TEST_MIN_VALUE,
  TEST_NAME,
  TEST_STEP,
  TEST_TRIGGER_KEY,
} from "../../mocks";

type NumberInputProps = Omit<
  FormNumberInputProps,
  "triggerKeys" | "name" | "min" | "max" | "step"
>;

export const NumberInput: FC<NumberInputProps> = (props) => {
  return (
    <FormNumberInput
      name={TEST_NAME}
      triggerKeys={TEST_TRIGGER_KEY}
      min={TEST_MIN_VALUE}
      max={TEST_MAX_VALUE}
      step={TEST_STEP}
      {...props}
    />
  );
};
