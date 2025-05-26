import { ChangeEvent } from "react";

import { UseFocusOnKeyPressProps } from "@hooks/useFocusOnKeyPress";

export type FormNumberInputLabelProps = {
  label: string;
  labelPosition: "row" | "column";
};

export type FormNumberInputProps = Partial<FormNumberInputLabelProps> &
  UseFocusOnKeyPressProps & {
    name: string;
    min: number;
    max: number;
    disabled?: boolean;
    step?: number;
  };

export type InputHandlersProps = {
  value: string;
  isInvalid: boolean;
  onHandleChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  onIncrementValue: () => void;
  onDecrementValue: () => void;
  onBlur: () => void;
};

export type FormNumberInputContextProps = FormNumberInputProps &
  InputHandlersProps;
