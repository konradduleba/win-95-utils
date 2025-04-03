import { expect } from "vitest";
import { within } from "@testing-library/dom";

import { TextWithDecoratedLetterProps } from "../../text-with-decorated-letter";

import {
  CheckIsLetterDecoratedProps,
  CheckIsOnlyFirstLetterDecoratedProps,
  TextWithDecoratedLetterBuilderProps,
} from "../types";

export class TextWithDecoratedLetterBuilder {
  container: HTMLElement;
  textDecoration: TextWithDecoratedLetterProps["textDecoration"];

  constructor({
    container,
    textDecoration,
  }: TextWithDecoratedLetterBuilderProps) {
    this.container = container;
    this.textDecoration = textDecoration;
  }

  checkIsLetterDecorated({ letter }: CheckIsLetterDecoratedProps) {
    try {
      const decoratedLetter = within(this.container).getAllByText(letter)[0];

      return window
        .getComputedStyle(decoratedLetter)
        .textDecoration.includes(this.textDecoration);
    } catch {
      return false;
    }
  }

  checkIsOnlyFirstLetterDecorated({
    letter,
  }: CheckIsOnlyFirstLetterDecoratedProps) {
    const allDecoratedLetter = within(this.container).getAllByText(letter);

    const style = `text-decoration: ${this.textDecoration}`;

    expect(allDecoratedLetter.length).toBeGreaterThan(1);
    expect(allDecoratedLetter[0]).toHaveStyle(style);
    expect(allDecoratedLetter[1]).not.toHaveStyle(style);
  }
}
