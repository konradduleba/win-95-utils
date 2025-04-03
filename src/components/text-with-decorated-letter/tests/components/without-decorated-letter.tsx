import { FC } from "react";

import { TextWithDecoratedLetter } from "@components/text-with-decorated-letter/text-with-decorated-letter";

import {
  TEST_NOT_DECORATED_LETTER,
  TEST_TEXT,
  TEST_TEXT_DECORATION,
} from "../mocks";

export const WithoutDecoratedLetter: FC = () => {
  return (
    <TextWithDecoratedLetter
      letter={TEST_NOT_DECORATED_LETTER}
      text={TEST_TEXT}
      textDecoration={TEST_TEXT_DECORATION}
    />
  );
};
