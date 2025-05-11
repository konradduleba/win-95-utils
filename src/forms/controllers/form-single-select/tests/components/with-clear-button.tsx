import { FC } from "react";

import { FormWrapper } from "./form-wrapper/form-wrapper";
import { Select } from "./select/select";

export const WithClearButton: FC = () => {
  return (
    <FormWrapper>
      <Select isClearable />
    </FormWrapper>
  );
};
