import { useContext } from "react";

import { FormRadioboxContext } from "../form-radiobox.context";

export const useFormRadiobox = () => {
  const context = useContext(FormRadioboxContext);

  if (!context) {
    throw new Error(
      "useFormRadiobox must be used within a FormRadioboxContext"
    );
  }

  return context;
};
