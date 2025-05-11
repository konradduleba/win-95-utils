import { FC } from "react";

import { FormWrapper } from "./form-wrapper/form-wrapper";
import { Select } from "./select/select";

import { TEST_LABEL } from "../mocks";

export const WithLabel: FC = () => {
  return (
    <FormWrapper>
      <Select label={TEST_LABEL} />
    </FormWrapper>
  );
};
