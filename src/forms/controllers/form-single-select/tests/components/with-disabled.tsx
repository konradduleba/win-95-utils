import { FC } from "react";

import { FormWrapper } from "./form-wrapper/form-wrapper";
import { Select } from "./select/select";

export const WithDisabled: FC = () => {
  return (
    <FormWrapper>
      <Select disabled />
    </FormWrapper>
  );
};
