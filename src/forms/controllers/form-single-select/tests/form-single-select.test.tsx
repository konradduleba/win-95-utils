import { ReactNode } from "react";

import { render } from "@testing-library/react";

import { describe, expect, test } from "vitest";

import {
  TEST_LABEL,
  TEST_SINGLE_SELECT_EXAMPLE_VALUE,
  TEST_TRIGGER_KEY,
} from "./mocks";

import {
  WithDisabled,
  WithLabel,
  WithoutLabel,
  WithClearButton,
  WithRequiredField,
} from "./components";

import { FormSingleSelectForTest } from "./builders";

const renderSingleSelect = async (Component: ReactNode) => {
  render(Component);

  const select = new FormSingleSelectForTest();

  return {
    select,
  };
};

describe("Test coverage for Form Single Select", () => {
  test("Should be without label", async () => {
    const { select } = await renderSingleSelect(<WithoutLabel />);

    const labelText = select.getLabel();

    expect(labelText).toBeNull();
  });

  test("Should have label", async () => {
    const { select } = await renderSingleSelect(<WithLabel />);

    const labelText = select.getLabelText();

    expect(labelText).toBe(TEST_LABEL);
  });

  test("Should be required field", async () => {
    const { select } = await renderSingleSelect(<WithRequiredField />);

    await select.triggerRequiredError();
  });

  test(`Should trigger focus on '${TEST_TRIGGER_KEY}' key`, async () => {
    const { select } = await renderSingleSelect(<WithLabel />);

    await select.triggerFocusViaKey();
  });

  test("Should be disabled", async () => {
    const { select } = await renderSingleSelect(<WithDisabled />);

    const isDisabled = select.checkIsDisabled();

    expect(isDisabled).toBe(true);
  });

  test("Should have clearable button", async () => {
    const { select } = await renderSingleSelect(<WithClearButton />);

    select.changeSelectValue({ value: TEST_SINGLE_SELECT_EXAMPLE_VALUE });

    select.clearSelectValue();
  });
});
