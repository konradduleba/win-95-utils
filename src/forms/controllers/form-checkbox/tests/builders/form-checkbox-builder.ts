import { expect } from "vitest";
import { screen, within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import {
  FormCheckboxBuilderProps,
  FocusInputWithAKeyProps,
  CheckBooleanAriaProp,
} from "../types";

import { BOX_TEST_ID, CHECKBOX_TEST_ID, LABEL_TEST_ID } from "../../constants";

export class FormCheckboxBuilder {
  name: string;
  wrapper: HTMLDivElement;
  checkbox: HTMLLabelElement;
  label: HTMLSpanElement;
  box: HTMLDivElement;

  constructor({ name }: FormCheckboxBuilderProps) {
    this.name = name;
    this.wrapper = screen.getByTestId(`checkbox-wrapper-${this.name}`);
    this.checkbox = within(this.wrapper).getByTestId(CHECKBOX_TEST_ID);
    this.label = within(this.wrapper).getByTestId(LABEL_TEST_ID);
    this.box = within(this.wrapper).getByTestId(BOX_TEST_ID);
  }

  private checkBooleanAriaProp = ({
    property,
  }: CheckBooleanAriaProp): boolean => {
    return property === "true";
  };

  getCheckboxValue(): boolean {
    return this.checkBooleanAriaProp({ property: this.checkbox.ariaChecked });
  }

  async clearCheckboxValue() {
    const isChecked = this.getCheckboxValue();

    if (isChecked) {
      await userEvent.click(this.box);
    }

    const isAgainChecked = this.getCheckboxValue();

    expect(isAgainChecked).toBe(false);
  }

  checkIsError(): boolean {
    return this.checkBooleanAriaProp({ property: this.box.ariaInvalid });
  }

  async focusInputWithAKey({ key }: FocusInputWithAKeyProps) {
    await userEvent.keyboard(key);

    expect(this.checkbox).toHaveFocus();
  }

  checkIsDisabled(): boolean {
    return this.checkBooleanAriaProp({ property: this.checkbox.ariaDisabled });
  }
}
