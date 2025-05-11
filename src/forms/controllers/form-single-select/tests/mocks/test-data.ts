import { SelectOption } from "@forms/controllers/form-single-select/types";

export const TEST_NAME = "test-value";
export const TEST_LABEL = "test label";
export const TEST_INPUT_VALUE = "test select value";

export const TEST_FORM_NAME = "test-form-name";

export const TEST_SUBMIT_LABEL = "test-submit-label";

export const TEST_TRIGGER_KEY = "x";

export const TEST_SINGLE_SELECT_OPTIONS: SelectOption[] = Array.from(
  { length: 50 },
  (_, index) => ({
    value: index,
    label: `Value - ${index}`,
  })
);

export const TEST_SINGLE_SELECT_EXAMPLE_VALUE: SelectOption["value"] =
  TEST_SINGLE_SELECT_OPTIONS[0].value;
