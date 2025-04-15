import { render } from "@testing-library/react";

import { describe, expect, test } from "vitest";

import { TEST_TRIGGER_KEY } from "./mocks";

import { Radioboxes } from "./components";
import { RADIOBOX_KEYS } from "./components/form-wrapper/utils/types";

import { FormRadioboxForTest } from "./builders";

const renderRadiobox = async () => {
  render(<Radioboxes />);

  const radiobox = new FormRadioboxForTest();

  return {
    radiobox,
  };
};

describe("Test coverage for Form Radiobox", () => {
  test("Should be selected", async () => {
    const { radiobox } = await renderRadiobox();

    await radiobox.selectRadiobox({ value: RADIOBOX_KEYS.option_two });

    const isSelected = radiobox.checkIsSelected({
      expectedValue: RADIOBOX_KEYS.option_two,
    });

    expect(isSelected).toBe(true);
  });
  test("Should be required", async () => {
    const { radiobox } = await renderRadiobox();

    await radiobox.triggerRequiredError();
  });

  test("Should be disabled", async () => {
    const { radiobox } = await renderRadiobox();

    const isDisabled = radiobox.checkIsDisabled({
      expectedValue: RADIOBOX_KEYS.option_one,
    });

    expect(isDisabled).toBe(true);
  });

  test(`Should trigger focus on '${TEST_TRIGGER_KEY}' key`, async () => {
    const { radiobox } = await renderRadiobox();

    await radiobox.triggerFocusViaKey();
  });
});
