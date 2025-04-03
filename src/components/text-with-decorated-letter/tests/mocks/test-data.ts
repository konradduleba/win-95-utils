import { TextWithDecoratedLetterProps } from "@components/text-with-decorated-letter/text-with-decorated-letter";

export const TEST_TEXT: TextWithDecoratedLetterProps["text"] = "TEST TEXT";

export const TEST_DECORATED_LETTER: TextWithDecoratedLetterProps["letter"] =
  TEST_TEXT[0];

export const TEST_NOT_DECORATED_LETTER: TextWithDecoratedLetterProps["letter"] =
  "L";

export const TEST_TEXT_DECORATION: TextWithDecoratedLetterProps["textDecoration"] =
  "underline";
