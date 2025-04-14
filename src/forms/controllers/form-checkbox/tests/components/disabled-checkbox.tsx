import { FC } from "react";

import { FormWrapper } from "./form-wrapper/form-wrapper";
import { Checkbox } from "./checkbox/checkbox";

export const DisabledCheckbox: FC = () => {
  return (
    <FormWrapper>
      <Checkbox disabled />
    </FormWrapper>
  );
};
