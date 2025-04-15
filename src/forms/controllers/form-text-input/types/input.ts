import { ChangeEvent, HTMLInputAutoCompleteAttribute } from "react";

import { UseFocusOnKeyPressProps } from "@hooks/useFocusOnKeyPress";

export type FormTextInputLabelProps = {
  label: string;
  labelPosition: "row" | "column";
};

export type FormTextInputProps = Partial<FormTextInputLabelProps> &
  UseFocusOnKeyPressProps & {
    name: string;
    isPassword?: boolean;
    autocompleteId?: HTMLInputAutoCompleteAttribute;
    disabled?: boolean;
  };

export type InputHandlersProps = {
  value: string;
  isInvalid: boolean;
  onHandleChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
};

export type FormTextInputContextProps = FormTextInputProps & InputHandlersProps;
