export type SelectOption = {
  value: number | string;
  label: string;
};

export type FormSingleSelectProps = {
  name: string;
  options: SelectOption[];
  className?: string;
  placeholder?: string;
  disabled?: boolean;
};

export type FormSingleSelectContextProps = {
  isInvalid: boolean;
};
