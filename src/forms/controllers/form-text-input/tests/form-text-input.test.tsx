import { ReactNode } from "react";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { describe, expect, test } from "vitest";

import {
  TEST_AUTOCOMPLETE,
  TEST_CUSTOM_ERROR_MESSAGE,
  TEST_LABEL,
  TEST_TRIGGER_KEY,
} from "./mocks";

import {
  WithAutoComplete,
  WithCustomErrorMessage,
  WithLabel,
  WithoutLabel,
  WithPassword,
  WithRequiredField,
} from "./components";

import { checkIsComponentReady } from "./helpers";

import { FormTextInputForTest } from "./builders";

const renderTextInput = async (Component: ReactNode) => {
  render(Component);

  await checkIsComponentReady();

  const input = new FormTextInputForTest();

  return {
    input,
  };
};

describe("Test coverage for Form Text Input", () => {
  test("Should be without label", async () => {
    const { input } = await renderTextInput(<WithoutLabel />);

    const labelText = input.getLabel();

    expect(labelText).toBeNull();
  });

  test("Should have label", async () => {
    const { input } = await renderTextInput(<WithLabel />);

    const labelText = input.getLabelText();

    expect(labelText).toBe(TEST_LABEL);
  });

  test("Should label focus input", async () => {
    const { input } = await renderTextInput(<WithLabel />);

    const label = input.getLabel();

    expect(label).toBeInTheDocument();

    if (!label) {
      throw new Error("Label is not in the DOM");
    }

    await userEvent.click(label);

    expect(input.input).toHaveFocus();
  });

  test("Should be required field", async () => {
    const { input } = await renderTextInput(<WithRequiredField />);

    await input.triggerRequiredError();
  });

  test("Should have autoComplete attribute", async () => {
    const { input } = await renderTextInput(<WithAutoComplete />);

    input.checkAutoCompleteAttribute({ attribute: TEST_AUTOCOMPLETE });
  });

  test("Should have custom error message", async () => {
    const { input } = await renderTextInput(<WithCustomErrorMessage />);

    await input.triggerRequiredError();

    const errorMessage = input.getErrorMessage();

    expect(errorMessage).toBe(TEST_CUSTOM_ERROR_MESSAGE);
  });

  test("Should have password type", async () => {
    const { input } = await renderTextInput(<WithPassword />);

    input.expectPasswordType();
  });

  test(`Should trigger focus on '${TEST_TRIGGER_KEY}' key`, async () => {
    const { input } = await renderTextInput(<WithLabel />);

    await input.triggerFocusViaKey();
  });
});
