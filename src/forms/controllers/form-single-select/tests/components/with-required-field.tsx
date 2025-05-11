import { FC } from "react";

import { FormWrapper } from "./form-wrapper/form-wrapper";
import { Select } from "./select/select";

import { TEST_FORM_NAME } from "../mocks";

export const WithRequiredField: FC = () => {
  return (
    <FormWrapper isRequired name={TEST_FORM_NAME} withSubmitButton>
      <Select />
    </FormWrapper>
  );
};
