import { FC } from "react";

import { FormWrapper } from "./form-wrapper/form-wrapper";
import { NumberInput } from "./number-input/number-input";

export const WithDisabled: FC = () => {
  return (
    <FormWrapper>
      <NumberInput disabled />
    </FormWrapper>
  );
};
