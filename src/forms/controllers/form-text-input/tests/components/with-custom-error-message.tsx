import { FC } from "react";

import { FormWrapper } from "./form-wrapper/form-wrapper";
import { TextInput } from "./text-input/text-input";

import { TEST_CUSTOM_ERROR_MESSAGE, TEST_FORM_NAME } from "../mocks";

export const WithCustomErrorMessage: FC = () => {
  return (
    <FormWrapper
      isRequired
      name={TEST_FORM_NAME}
      withSubmitButton
      customErrorMessage={TEST_CUSTOM_ERROR_MESSAGE}
    >
      <TextInput />
    </FormWrapper>
  );
};
