import { SelectOption } from "@forms/controllers/form-single-select/types";

export const SINGLE_SELECT_OPTIONS: SelectOption[] = Array.from(
  { length: 50 },
  (_, index) => ({
    value: index,
    label: `Value - ${index}`,
  })
);
