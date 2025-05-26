import { expect } from "vitest";
import { screen, within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import {
  ChangeInputValueProps,
  CheckAutoCompleteAttributeProps,
  FocusInputWithAKeyProps,
  FormTextInputBuilderProps,
} from "../types";

export class FormTextInputBuilder {
  name: string;
  wrapper: HTMLDivElement;
  input: HTMLInputElement;

  constructor({ name }: FormTextInputBuilderProps) {
    this.name = name;
    this.wrapper = screen.getByTestId(`text-input-wrapper-${this.name}`);
    this.input = within(this.wrapper).getByLabelText(this.name);
  }

  async clearInputValue() {
    await userEvent.clear(this.input);
    expect(this.input).toHaveValue("");
  }

  async changeInputValue({ newValue }: ChangeInputValueProps) {
    await this.clearInputValue();

    await userEvent.type(this.input, newValue);

    expect(this.input).toHaveValue(newValue);
  }

  getLabel(): HTMLLabelElement | null {
    return this.wrapper.querySelector("label");
  }

  getLabelText() {
    const label = this.getLabel();

    expect(label).toBeInTheDocument();

    if (!label) {
      throw new Error("Label is not in the DOM");
    }

    return label.textContent;
  }

  async checkIsError(): Promise<boolean> {
    return !!within(this.wrapper).queryByRole("alert");
  }

  getErrorMessage() {
    const errorMessage = within(this.wrapper).getByRole("alert");

    expect(errorMessage).toBeInTheDocument();

    return errorMessage.textContent;
  }

  checkAutoCompleteAttribute({ attribute }: CheckAutoCompleteAttributeProps) {
    expect(this.input).toHaveAttribute("autocomplete", attribute);
  }

  async focusInputWithAKey({ key }: FocusInputWithAKeyProps) {
    await userEvent.keyboard(key);

    expect(this.input).toHaveFocus();
  }
}
