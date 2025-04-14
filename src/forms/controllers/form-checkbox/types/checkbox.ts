import { ChangeEvent, KeyboardEvent } from "react";

import { UseFocusOnKeyPressProps } from "@hooks/useFocusOnKeyPress";

export type FormCheckboxProps = UseFocusOnKeyPressProps & {
  name: string;
  label: string;
  disabled?: boolean;
};

export type InputHandlersProps = {
  isChecked: boolean;
  isInvalid: boolean;
  onHandleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (event: KeyboardEvent<HTMLLabelElement>) => void;
};

export type FormCheckboxContextProps = FormCheckboxProps & InputHandlersProps;
