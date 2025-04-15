import { expect } from "vitest";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import {
  FormRadioboxBuilderProps,
  FocusInputWithAKeyProps,
  CheckBooleanAriaProp,
  CheckIsDisabledRadiobox,
  CheckIsSelectedRadiobox,
  SelectRadiobox,
} from "../types";

export class FormRadioboxBuilder {
  name: string;
  radioboxes: HTMLLabelElement[];

  constructor({ name }: FormRadioboxBuilderProps) {
    this.name = name;
    this.radioboxes = screen.getAllByRole("radio");
  }

  private checkBooleanAriaProp = ({
    property,
  }: CheckBooleanAriaProp): boolean => {
    return property === "true";
  };

  checkIsError(): boolean {
    return this.radioboxes.some((radiobox: HTMLLabelElement) =>
      this.checkBooleanAriaProp({
        property: radiobox.ariaInvalid,
      })
    );
  }

  async focusInputWithAKey({ key, expectedValue }: FocusInputWithAKeyProps) {
    await userEvent.keyboard(key);

    const focusedRadiobox = this.radioboxes.find((radiobox: HTMLLabelElement) =>
      radiobox.contains(document.activeElement)
    );

    expect(focusedRadiobox).not.toBeUndefined();
    expect(focusedRadiobox?.ariaLabel).toBe(expectedValue);
  }

  checkIsDisabled({ expectedValue }: CheckIsDisabledRadiobox): boolean {
    const disabledRadiobox = this.radioboxes.find(
      (radiobox: HTMLLabelElement) =>
        this.checkBooleanAriaProp({
          property: radiobox.ariaDisabled,
        })
    );

    if (!disabledRadiobox) {
      return false;
    }

    return disabledRadiobox.ariaLabel === expectedValue;
  }

  checkIsSelected({ expectedValue }: CheckIsSelectedRadiobox): boolean {
    const selectedRadiobox = this.radioboxes.find(
      (radiobox: HTMLLabelElement) =>
        this.checkBooleanAriaProp({
          property: radiobox.ariaSelected,
        })
    );

    if (!selectedRadiobox) {
      return false;
    }

    return selectedRadiobox.ariaLabel === expectedValue;
  }

  async selectRadiobox({ value }: SelectRadiobox) {
    const radiobox = this.radioboxes.find(
      (radiobox: HTMLLabelElement) => radiobox.ariaLabel === value
    );

    if (!radiobox) {
      throw new Error(`Radiobox with value ${value} do not exists`);
    }

    await userEvent.click(radiobox);
  }
}
