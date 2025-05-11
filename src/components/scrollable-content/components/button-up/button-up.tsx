import { FC } from "react";

import { useScrollableContent } from "../../hooks";

import { TEST_BUTTON_UP } from "../../constants";

import { ChevronButton } from "../chevron-button/chevron-button";

export const ButtonUp: FC = () => {
  const { onClickUp } = useScrollableContent();

  return (
    <ChevronButton
      onClick={onClickUp}
      position="bottom"
      testId={TEST_BUTTON_UP}
    />
  );
};
