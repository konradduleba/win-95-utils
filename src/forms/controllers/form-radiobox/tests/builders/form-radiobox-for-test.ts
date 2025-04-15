import { expect } from "vitest";
import { screen, within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import {
  TEST_FORM_NAME,
  TEST_NAME,
  TEST_SUBMIT_LABEL,
  TEST_TRIGGER_KEY,
} from "../mocks";

import { FormRadioboxBuilder } from "./form-radiobox-builder";

import { RADIOBOX_KEYS } from "../components/form-wrapper/utils/types";

export class FormRadioboxForTest extends FormRadioboxBuilder {
  private radioboxBuilder: FormRadioboxBuilder;

  constructor() {
    super({ name: TEST_NAME });

    this.radioboxBuilder = new FormRadioboxBuilder({
      name: TEST_NAME,
    });
  }

  async submitForm() {
    const form = screen.getByRole("form", {
      name: TEST_FORM_NAME,
    }) as HTMLFormElement;

    const submitButton = within(form).getByRole("button", {
      name: TEST_SUBMIT_LABEL,
    });

    expect(submitButton).toBeInTheDocument();

    await userEvent.click(submitButton);
  }

  async triggerRequiredError() {
    await this.submitForm();

    const isError = this.radioboxBuilder.checkIsError();

    expect(isError).toBe(true);
  }

  async triggerFocusViaKey() {
    await this.radioboxBuilder.focusInputWithAKey({
      key: TEST_TRIGGER_KEY,
      expectedValue: RADIOBOX_KEYS.option_three,
    });
  }
}
