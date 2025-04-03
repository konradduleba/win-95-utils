import { screen } from "@testing-library/dom";
import { expect } from "vitest";

import { TEST_NAME } from "../mocks";

export const checkIsComponentReady = async () => {
  const wrapper = await screen.findByTestId(`text-input-wrapper-${TEST_NAME}`);
  expect(wrapper).toBeInTheDocument();
};
