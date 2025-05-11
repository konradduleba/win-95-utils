import { UseFocusOnKeyPressProps } from "@hooks/useFocusOnKeyPress";

export type SelectOption = {
  value: number | string;
  label: string;
};

export type FormSingleSelectProps = UseFocusOnKeyPressProps & {
  label?: string;
  name: string;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  isClearable?: boolean;
  isMenuOpen?: boolean;
};

export type SelectHandlersProps = {
  value?: SelectOption;
  isInvalid: boolean;
  onHandleChange: (selectedValue: unknown) => void;
};

export type FormSingleSelectContextProps = FormSingleSelectProps &
  SelectHandlersProps;
