import { ReactNode } from "react";
import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";

import { TextWithDecoratedLetterBuilder } from "./builders";

import {
  TEST_DECORATED_LETTER,
  TEST_NOT_DECORATED_LETTER,
  TEST_TEXT_DECORATION,
} from "./mocks";

import { WithDecoratedLetter, WithoutDecoratedLetter } from "./components";

const renderTextWithDecoratedLetter = async (Component: ReactNode) => {
  const { container } = render(Component);

  const text = new TextWithDecoratedLetterBuilder({
    container,
    textDecoration: TEST_TEXT_DECORATION,
  });

  return {
    text,
  };
};

describe("Test coverage for Text With Decorated Letter", () => {
  test(`Should ${TEST_DECORATED_LETTER} be decorated with ${TEST_TEXT_DECORATION}`, async () => {
    const { text } = await renderTextWithDecoratedLetter(
      <WithDecoratedLetter />
    );

    const isDecorated = text.checkIsLetterDecorated({
      letter: TEST_DECORATED_LETTER,
    });

    expect(isDecorated).toBe(true);
  });

  test(`Should ${TEST_NOT_DECORATED_LETTER} be not decorated`, async () => {
    const { text } = await renderTextWithDecoratedLetter(
      <WithoutDecoratedLetter />
    );

    const isDecorated = text.checkIsLetterDecorated({
      letter: TEST_NOT_DECORATED_LETTER,
    });

    expect(isDecorated).toBe(false);
  });

  test(`Should only first ${TEST_DECORATED_LETTER} be decorated with ${TEST_TEXT_DECORATION}`, async () => {
    const { text } = await renderTextWithDecoratedLetter(
      <WithDecoratedLetter />
    );

    text.checkIsOnlyFirstLetterDecorated({
      letter: TEST_DECORATED_LETTER,
    });
  });
});
