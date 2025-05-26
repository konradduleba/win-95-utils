import { FC } from "react";

import { FormWrapper } from "./form-wrapper/form-wrapper";
import { NumberInput } from "./number-input/number-input";

export const WithoutLabel: FC = () => {
  return (
    <FormWrapper>
      <NumberInput />
    </FormWrapper>
  );
};
