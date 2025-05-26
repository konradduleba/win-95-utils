import { expect } from "vitest";
import { screen, within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import {
  ActionButtonProps,
  ChangeInputValueProps,
  CheckBooleanAriaProp,
  FocusInputWithAKeyProps,
  FormNumberInputBuilderProps,
} from "../types";

import { DECREMENT, INCREMENT, INPUT_WRAPPER_LABEL } from "../../constants";

export class FormNumberInputBuilder {
  name: string;
  wrapper: HTMLDivElement;
  inputWrapper: HTMLDivElement;
  input: HTMLInputElement;
  incrementButton: HTMLButtonElement;
  decrementButton: HTMLButtonElement;

  constructor({ name }: FormNumberInputBuilderProps) {
    this.name = name;
    this.wrapper = screen.getByTestId(`number-input-wrapper-${this.name}`);
    this.inputWrapper = within(this.wrapper).getByLabelText(
      INPUT_WRAPPER_LABEL
    );
    this.input = within(this.inputWrapper).getByLabelText(this.name);
    this.incrementButton = within(this.inputWrapper).getByRole("button", {
      name: INCREMENT,
    });
    this.decrementButton = within(this.inputWrapper).getByRole("button", {
      name: DECREMENT,
    });
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

  private checkBooleanAriaProp = ({
    property,
  }: CheckBooleanAriaProp): boolean => {
    return property === "true";
  };

  checkIsError(): boolean {
    return this.checkBooleanAriaProp({
      property: this.inputWrapper.ariaInvalid,
    });
  }

  async focusInputWithAKey({ key }: FocusInputWithAKeyProps) {
    await userEvent.keyboard(key);

    expect(this.input).toHaveFocus();
  }

  async incrementValue({ step, defaultValue }: ActionButtonProps) {
    await this.changeInputValue({ newValue: defaultValue });
    await userEvent.click(this.incrementButton);

    const currentValue = Number(this.input.value);
    const expectedValue = currentValue + step;

    expect(currentValue).toBe(expectedValue);
  }

  async decrementValue({ step, defaultValue }: ActionButtonProps) {
    await this.changeInputValue({ newValue: defaultValue });
    await userEvent.click(this.decrementButton);

    const currentValue = Number(this.input.value);
    const expectedValue = currentValue - step;

    expect(currentValue).toBe(expectedValue);
  }
}
