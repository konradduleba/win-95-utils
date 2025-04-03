import { expect } from "vitest";
import { screen, within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import {
  SELECT_DROPDOWN_CONTAINER_TEST_ID,
  SELECT_DROPDOWN_INDICATOR_TEST_ID,
  SELECT_OPTION_TEST_ID,
  SELECT_SINGLE_VALUE_TEST_ID,
} from "../constants";

type ChangeSelectValueProps = {
  containerTestId: string;
};

export const changeSelectValue = async ({
  containerTestId,
}: ChangeSelectValueProps) => {
  const initialSelectContainer = screen.getByTestId(containerTestId);

  const dropdownButton = within(initialSelectContainer).getByTestId(
    SELECT_DROPDOWN_INDICATOR_TEST_ID
  );

  await userEvent.click(dropdownButton);

  const selectDropdownContainer = screen.getByTestId(
    SELECT_DROPDOWN_CONTAINER_TEST_ID
  );

  const options = within(selectDropdownContainer).getAllByTestId(
    SELECT_OPTION_TEST_ID
  );

  const currentOption = within(initialSelectContainer).getByTestId(
    SELECT_SINGLE_VALUE_TEST_ID
  ).textContent;

  const optionToSelect = options.find(
    (option) => option.textContent !== currentOption
  );

  if (!optionToSelect) {
    throw new Error(`Expected to contain other options than ${currentOption}`);
  }

  await userEvent.click(optionToSelect);

  const selectContainerAfterChange = screen.getByTestId(containerTestId);

  const newSelectedOption = within(selectContainerAfterChange).getByTestId(
    SELECT_SINGLE_VALUE_TEST_ID
  ).textContent;

  expect(newSelectedOption).toBe(optionToSelect.textContent);
};
