import { ReactNode } from "react";

import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";

import { describe, expect, test } from "vitest";

import { TEST_TRIGGER_KEY } from "./mocks";

import {
  DisabledCheckbox,
  WithNotRequiredField,
  WithRequiredField,
} from "./components";

import { FormCheckboxForTest } from "./builders";

const renderCheckbox = async (Component: ReactNode) => {
  render(Component);

  const checkbox = new FormCheckboxForTest();

  return {
    checkbox,
  };
};

describe("Test coverage for Form Checkbox", () => {
  test("Should be checked", async () => {
    const { checkbox } = await renderCheckbox(<WithRequiredField />);

    await userEvent.click(checkbox.label);

    const isChecked = checkbox.getCheckboxValue();

    expect(isChecked).toBe(true);
  });
  test("Should be required", async () => {
    const { checkbox } = await renderCheckbox(<WithRequiredField />);

    await checkbox.triggerRequiredError();
  });

  test("Should be disabled", async () => {
    const { checkbox } = await renderCheckbox(<DisabledCheckbox />);

    const isDisabled = checkbox.checkIsDisabled();

    expect(isDisabled).toBe(true);
  });

  test(`Should trigger focus on '${TEST_TRIGGER_KEY}' key`, async () => {
    const { checkbox } = await renderCheckbox(<WithNotRequiredField />);

    await checkbox.triggerFocusViaKey();
  });
});
