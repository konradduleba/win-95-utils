import { expect } from "vitest";
import { screen, within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import {
  TEST_FORM_NAME,
  TEST_NAME,
  TEST_SUBMIT_LABEL,
  TEST_TRIGGER_KEY,
} from "../mocks";

import { FormSingleSelectBuilder } from "./form-single-select-builder";

export class FormSingleSelectForTest extends FormSingleSelectBuilder {
  private selectBuilder: FormSingleSelectBuilder;

  constructor() {
    super({ name: TEST_NAME });

    this.selectBuilder = new FormSingleSelectBuilder({
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

    const isError = this.selectBuilder.checkIsError();

    expect(isError).toBe(true);
  }

  async triggerFocusViaKey() {
    await this.selectBuilder.focusInputWithAKey({ key: TEST_TRIGGER_KEY });
  }
}
