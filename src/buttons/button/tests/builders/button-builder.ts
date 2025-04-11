import { expect } from "vitest";
import { screen } from "@testing-library/dom";

import { ButtonBuilderProps } from "../types";

export class ButtonBuilder {
  button: HTMLButtonElement;

  constructor({ name }: ButtonBuilderProps) {
    this.button = screen.getByRole("button", { name });
  }

  checkIsButtonDisabled() {
    expect(this.button).toBeDisabled();
  }

  getButtonValue() {
    return this.button.value;
  }
}
