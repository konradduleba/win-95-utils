import { screen, within } from "@testing-library/dom";

import { CHECKBOX_INPUT_TEST_ID, CHECKBOX_LABEL_TEST_ID } from "../constants";

import { CheckboxTestProps } from "../types";

export const getCheckboxHandlers = ({ containerId }: CheckboxTestProps) => {
  const container = screen.getByTestId(containerId);

  const checkbox = within(container).getByTestId(
    CHECKBOX_INPUT_TEST_ID
  ) as HTMLInputElement;

  const label = within(container).getByTestId(
    CHECKBOX_LABEL_TEST_ID
  ) as HTMLLabelElement;

  return {
    checkbox,
    label,
  };
};
