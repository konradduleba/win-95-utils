import { screen, within } from "@testing-library/dom";

import { ChangeNumberInputValueProps } from "../types";

import { loopClickEventAndCompare } from "./loop-click-event-and-compare";

export const changeNumberInputValueByIncrement = async ({
  difference,
  testId,
  range,
}: ChangeNumberInputValueProps) => {
  const numberInput = screen.getByTestId(`${testId}-input`) as HTMLInputElement;
  const initialValue = parseInt(numberInput.value);

  const actionContainer = screen.getByTestId(`${testId}-actions`);

  const actionButton = within(actionContainer).getByTestId(
    `${testId}-increment-button`
  );

  if (!range) {
    return await loopClickEventAndCompare({
      actionButton,
      loopCount: difference,
      numberInput,
      expectedValue: initialValue + difference,
    });
  }

  const { max } = range;

  const expectedValue = Math.min(initialValue + difference, max);
  const maxNumberOfClick = expectedValue - initialValue;

  await loopClickEventAndCompare({
    actionButton,
    loopCount: maxNumberOfClick,
    numberInput,
    expectedValue: expectedValue,
  });
};
