import { expect } from "vitest";

import userEvent from "@testing-library/user-event";

type LoopClickEventAndCompare = {
  loopCount: number;
  actionButton: HTMLElement;
  numberInput: HTMLInputElement;
  expectedValue: number;
};

export const loopClickEventAndCompare = async ({
  actionButton,
  loopCount,
  numberInput,
  expectedValue,
}: LoopClickEventAndCompare) => {
  for (let i = 0; i < loopCount; i++) {
    await userEvent.click(actionButton);
  }

  const newValue = parseInt(numberInput.value);

  expect(newValue).toBe(expectedValue);
};
