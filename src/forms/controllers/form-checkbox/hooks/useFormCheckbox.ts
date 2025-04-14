import { useContext } from "react";

import { FormCheckboxContext } from "../form-checkbox.context";

export const useFormCheckbox = () => {
  const context = useContext(FormCheckboxContext);

  if (!context) {
    throw new Error(
      "useFormCheckbox must be used within a FormCheckboxContext"
    );
  }

  return context;
};
