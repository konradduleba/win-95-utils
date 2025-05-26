import { useContext } from "react";

import { FormNumberInputContext } from "../form-number-input.context";

export const useFormNumberInput = () => {
  const context = useContext(FormNumberInputContext);

  if (!context) {
    throw new Error(
      "useFormNumberInput must be used within a FormNumberInputContext"
    );
  }

  return context;
};
