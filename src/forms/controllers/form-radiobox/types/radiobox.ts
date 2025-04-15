import { KeyboardEvent } from "react";

import { UseFocusOnKeyPressProps } from "@hooks/useFocusOnKeyPress";

export type FormRadioboxProps = UseFocusOnKeyPressProps & {
  name: string;
  label: string;
  value: string | number;
  disabled?: boolean;
};

export type InputHandlersProps = {
  isSelected: boolean;
  isInvalid: boolean;
  onHandleChange: () => void;
  onKeyPress: (event: KeyboardEvent<HTMLLabelElement>) => void;
};

export type FormRadioboxContextProps = FormRadioboxProps & InputHandlersProps;
