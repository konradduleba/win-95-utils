import { FC } from "react";

import { useScrollableContent } from "../../hooks";

import { TEST_BUTTON_DOWN } from "../../constants";

import { ChevronButton } from "../chevron-button/chevron-button";

export const ButtonDown: FC = () => {
  const { onClickDown } = useScrollableContent();

  return (
    <ChevronButton
      onClick={onClickDown}
      position="top"
      testId={TEST_BUTTON_DOWN}
    />
  );
};
