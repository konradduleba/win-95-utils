import { ReactNode } from "react";
import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";

import { ButtonBuilder } from "./builders";

import { DefaultButton, DisabledButton } from "./components";

import { TEST_TEXT } from "./mocks";

const renderButton = async (Component: ReactNode) => {
  render(Component);

  const button = new ButtonBuilder({
    name: TEST_TEXT,
  });

  return {
    button,
  };
};

describe("Test coverage for Button", () => {
  test(`Should button be disabled`, async () => {
    const { button } = await renderButton(<DisabledButton />);

    button.checkIsButtonDisabled();
  });

  test(`Should button's value be equal ${TEST_TEXT}`, async () => {
    const { button } = await renderButton(<DefaultButton />);

    const value = button.getButtonValue();

    expect(value).toBe(TEST_TEXT);
  });
});
