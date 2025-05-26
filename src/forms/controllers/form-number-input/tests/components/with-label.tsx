import { FC } from "react";

import { FormWrapper } from "./form-wrapper/form-wrapper";
import { NumberInput } from "./number-input/number-input";

import { TEST_LABEL } from "../mocks";

export const WithLabel: FC = () => {
  return (
    <FormWrapper>
      <NumberInput label={TEST_LABEL} />
    </FormWrapper>
  );
};
