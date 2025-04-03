import { FC } from "react";

import { FormWrapper } from "./form-wrapper/form-wrapper";
import { TextInput } from "./text-input/text-input";

import { TEST_AUTOCOMPLETE } from "../mocks";

export const WithAutoComplete: FC = () => {
  return (
    <FormWrapper>
      <TextInput autocompleteId={TEST_AUTOCOMPLETE} />
    </FormWrapper>
  );
};
