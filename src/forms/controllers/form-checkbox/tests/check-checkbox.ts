import { expect } from "vitest";

import userEvent from "@testing-library/user-event";

import { getCheckboxHandlers } from "./get-checkbox-handlers";

import { CheckboxTestProps } from "../types";

export const checkCheckbox = async ({ containerId }: CheckboxTestProps) => {
  const { checkbox, label } = getCheckboxHandlers({ containerId });

  expect(checkbox).not.toBeChecked();

  await userEvent.click(label);

  expect(checkbox).toBeChecked();
};
