import { useContext } from "react";

import { FormTextInputContext } from "../form-text-input.context";

export const useFormTextInput = () => {
  const context = useContext(FormTextInputContext);

  if (!context) {
    throw new Error(
      "useFormTextInput must be used within a FormTextInputContext"
    );
  }

  return context;
};
