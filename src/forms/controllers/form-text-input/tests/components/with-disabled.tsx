import { FC } from "react";

import { FormWrapper } from "./form-wrapper/form-wrapper";
import { TextInput } from "./text-input/text-input";

export const WithDisabled: FC = () => {
  return (
    <FormWrapper>
      <TextInput disabled />
    </FormWrapper>
  );
};
