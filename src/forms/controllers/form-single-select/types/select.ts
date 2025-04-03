import { ReactNode } from "react";

export type SelectOption = {
  value: number | string;
  label: ReactNode;
};

export type FormSingleSelectProps = {
  options: SelectOption[];
  className?: string;
  name: string;
  isRequired?: boolean;
  placeholder?: ReactNode;
  testId: string;
};
