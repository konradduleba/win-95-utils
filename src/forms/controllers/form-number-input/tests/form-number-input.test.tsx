import { ReactNode } from "react";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { describe, expect, test } from "vitest";

import { TEST_LABEL, TEST_STEP, TEST_TRIGGER_KEY, TEST_VALUE } from "./mocks";

import {
  WithDisabled,
  WithLabel,
  WithoutLabel,
  WithRequiredField,
} from "./components";

import { FormNumberInputForTest } from "./builders";

const renderNumberInput = async (Component: ReactNode) => {
  render(Component);

  const input = new FormNumberInputForTest();

  return {
    input,
  };
};

describe("Test coverage for Form Text Input", () => {
  test("Should be without label", async () => {
    const { input } = await renderNumberInput(<WithoutLabel />);

    const labelText = input.getLabel();

    expect(labelText).toBeNull();
  });

  test("Should have label", async () => {
    const { input } = await renderNumberInput(<WithLabel />);

    const labelText = input.getLabelText();

    expect(labelText).toBe(TEST_LABEL);
  });

  test("Should label focus input", async () => {
    const { input } = await renderNumberInput(<WithLabel />);

    const label = input.getLabel();

    expect(label).toBeInTheDocument();

    if (!label) {
      throw new Error("Label is not in the DOM");
    }

    await userEvent.click(label);

    expect(input.input).toHaveFocus();
  });

  test("Should be required field", async () => {
    const { input } = await renderNumberInput(<WithRequiredField />);

    await input.triggerRequiredError();
  });

  test(`Should trigger focus on '${TEST_TRIGGER_KEY}' key`, async () => {
    const { input } = await renderNumberInput(<WithLabel />);

    await input.triggerFocusViaKey();
  });

  test("Should be disabled", async () => {
    const { input } = await renderNumberInput(<WithDisabled />);

    expect(input.input).toBeDisabled();
  });

  test("Should change value", async () => {
    const { input } = await renderNumberInput(<WithLabel />);

    await input.changeInputValue({ newValue: TEST_VALUE });
  });

  test(`Should increment value for ${TEST_STEP}`, async () => {
    const { input } = await renderNumberInput(<WithLabel />);

    input.incrementValue({ step: TEST_STEP, defaultValue: TEST_VALUE });
  });

  test(`Should decrement value for ${TEST_STEP}`, async () => {
    const { input } = await renderNumberInput(<WithLabel />);

    input.decrementValue({ step: TEST_STEP, defaultValue: TEST_VALUE });
  });
});
