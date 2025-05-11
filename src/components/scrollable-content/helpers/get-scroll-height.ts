import { SCROLL_DEFAULT_HEIGHT } from "../constants";

import { ScrollableContentContextProps } from "../types";

type GetScrollHeightProps = Pick<ScrollableContentContextProps, "childrenRef">;

export const getScrollHeight = ({ childrenRef }: GetScrollHeightProps) => {
  const childrenHeight = childrenRef.current?.scrollHeight ?? 0;

  if (childrenHeight > SCROLL_DEFAULT_HEIGHT) {
    return SCROLL_DEFAULT_HEIGHT;
  }

  return childrenHeight || SCROLL_DEFAULT_HEIGHT;
};
