import { expect } from "vitest";

import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import { ChangeNumberInputValueByTypingProps } from "../types";

export const changeNumberInputValueByTyping = async ({
  newValue,
  testId,
}: ChangeNumberInputValueByTypingProps) => {
  const newValueAsString = `${newValue}`;

  const numberInput = screen.getByTestId(`${testId}-input`) as HTMLInputElement;

  await userEvent.clear(numberInput);

  expect(numberInput).toHaveValue("");

  await userEvent.type(numberInput, newValueAsString);

  expect(numberInput).toHaveValue(newValueAsString);
};
