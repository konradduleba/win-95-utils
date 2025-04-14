import { expect } from "vitest";
import { screen, within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import {
  TEST_FORM_NAME,
  TEST_NAME,
  TEST_SUBMIT_LABEL,
  TEST_TRIGGER_KEY,
} from "../mocks";

import { FormCheckboxBuilder } from "./form-checkbox-builder";

export class FormCheckboxForTest extends FormCheckboxBuilder {
  private checkboxBuilder: FormCheckboxBuilder;

  constructor() {
    super({ name: TEST_NAME });

    this.checkboxBuilder = new FormCheckboxBuilder({
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
    await this.checkboxBuilder.clearCheckboxValue();

    await this.submitForm();

    const isError = this.checkboxBuilder.checkIsError();

    expect(isError).toBe(true);
  }

  async triggerFocusViaKey() {
    await this.checkboxBuilder.focusInputWithAKey({ key: TEST_TRIGGER_KEY });
  }
}
