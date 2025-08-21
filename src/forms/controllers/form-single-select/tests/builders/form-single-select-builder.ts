import { expect } from "vitest";
import { screen, within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import {
  FocusSelectWithAKeyProps,
  FormSingleSelectBuilderProps,
  CheckBooleanAriaProp,
  ChangeSelectValueProps,
} from "../types";

import {
  SINGLE_SELECT_CLEAR_BUTTON,
  SINGLE_SELECT_CONTROL_TEST_ID,
  SINGLE_SELECT_DROPDOWN_INDICATOR,
  SINGLE_SELECT_PLACEHOLDER,
  SINGLE_SELECT_VALUE,
} from "../../constants";

export class FormSingleSelectBuilder {
  name: string;
  wrapper: HTMLDivElement;
  value: string = "";
  control: HTMLDivElement;
  dropdownIndicator: HTMLButtonElement;

  constructor({ name }: FormSingleSelectBuilderProps) {
    this.name = name;
    this.wrapper = screen.getByTestId(`single-select-wrapper-${this.name}`);
    this.control = within(this.wrapper).getByTestId(
      SINGLE_SELECT_CONTROL_TEST_ID
    );
    this.dropdownIndicator = within(this.wrapper).getByLabelText(
      SINGLE_SELECT_DROPDOWN_INDICATOR
    );
  }

  async clearSelectValue() {
    await userEvent.click(this.dropdownIndicator);

    const clearButton = await within(this.wrapper).findByLabelText(
      SINGLE_SELECT_CLEAR_BUTTON
    );

    if (!clearButton) {
      throw new Error(
        "Clear button has not been found. Check is Form Single Select rendered with isClearable property on TRUE"
      );
    }

    await userEvent.click(clearButton);

    const placeholder = await within(this.wrapper).findByTestId<HTMLDivElement>(
      SINGLE_SELECT_PLACEHOLDER
    );

    expect(placeholder).toBeInTheDocument();

    this.value = "";
  }

  async changeSelectValue({ value }: ChangeSelectValueProps) {
    await userEvent.click(this.dropdownIndicator);

    const menuList = await within(this.wrapper).findByRole("listbox");

    console.log({ menuList });

    expect(menuList).toBeInTheDocument();

    const options = within(menuList).getAllByRole<HTMLDivElement>("option");

    const valueAsString = value.toString();

    const elementToSelect = options.find(
      ({ ariaLabel }: HTMLDivElement) => ariaLabel === valueAsString
    );

    if (!elementToSelect) {
      throw new Error(`Element with value: ${value} does not exists`);
    }

    await userEvent.click(elementToSelect);

    expect(menuList).not.toBeInTheDocument();

    const selectedValueLabel = within(this.wrapper).getByTestId<HTMLDivElement>(
      SINGLE_SELECT_VALUE
    );

    expect(selectedValueLabel).toHaveTextContent(
      elementToSelect.textContent || ""
    );

    this.value = valueAsString;
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
    return this.checkBooleanAriaProp({ property: this.control.ariaInvalid });
  }

  checkIsDisabled(): boolean {
    return this.checkBooleanAriaProp({ property: this.control.ariaDisabled });
  }

  async focusInputWithAKey({ key }: FocusSelectWithAKeyProps) {
    let focusElement = await within(this.wrapper).findByTestId<HTMLDivElement>(
      SINGLE_SELECT_PLACEHOLDER
    );

    if (!focusElement) {
      focusElement = await within(this.wrapper).findByTestId<HTMLDivElement>(
        SINGLE_SELECT_VALUE
      );
    }

    await userEvent.keyboard(key);

    expect(focusElement).toHaveFocus();
  }
}
