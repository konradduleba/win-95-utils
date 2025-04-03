import { FC } from "react";

import { FormWrapper } from "./form-wrapper/form-wrapper";
import { TextInput } from "./text-input/text-input";

export const WithoutLabel: FC = () => {
  return (
    <FormWrapper>
      <TextInput />
    </FormWrapper>
  );
};
