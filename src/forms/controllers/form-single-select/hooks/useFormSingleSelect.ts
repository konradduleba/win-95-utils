import { useContext } from "react";

import { FormSingleSelectContext } from "../form-single-select.context";

export const useFormSingleSelect = () => {
  const context = useContext(FormSingleSelectContext);

  if (!context) {
    throw new Error(
      "useFormSingleSelect must be used within a FormSingleSelectContext"
    );
  }

  return context;
};
