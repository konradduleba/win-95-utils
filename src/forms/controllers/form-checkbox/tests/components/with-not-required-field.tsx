import { FC } from "react";

import { FormWrapper } from "./form-wrapper/form-wrapper";
import { Checkbox } from "./checkbox/checkbox";

import { TEST_FORM_NAME } from "../mocks";

export const WithNotRequiredField: FC = () => {
  return (
    <FormWrapper name={TEST_FORM_NAME} withSubmitButton>
      <Checkbox />
    </FormWrapper>
  );
};
