import { FC } from "react";

import { FormWrapper } from "./form-wrapper/form-wrapper";
import { TextInput } from "./text-input/text-input";

import { TEST_LABEL } from "../mocks";

export const WithLabel: FC = () => {
  return (
    <FormWrapper>
      <TextInput label={TEST_LABEL} />
    </FormWrapper>
  );
};
