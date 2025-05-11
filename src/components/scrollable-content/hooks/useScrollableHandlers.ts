import { UIEvent, useRef, useState } from "react";

import Scrollbar from "react-scrollbars-custom";
import { ScrollState } from "react-scrollbars-custom/dist/types/types";

import { SCROLL_STEP } from "../constants";

import { ScrollableContentProps } from "../types";

type UseScrollableHandlersProps = Pick<ScrollableContentProps, "scrollStep">;

export const useScrollableHandlers = ({
  scrollStep = SCROLL_STEP,
}: UseScrollableHandlersProps) => {
  const scrollRef = useRef<null>(null);
  const [scrollTop, setScrollTop] = useState(0);

  const onClickUp = () => {
    const { scrollTo } = scrollRef.current as unknown as Scrollbar;
    scrollTo(0, scrollTop + scrollStep);
  };

  const onClickDown = () => {
    const { scrollTo } = scrollRef.current as unknown as Scrollbar;
    scrollTo(0, scrollTop - scrollStep);
  };

  const onHandleScroll = (
    eventOrScroll: UIEvent<HTMLDivElement> | ScrollState,
    maybePrevScroll?: ScrollState
  ) => {
    let currentScrollTop = 0;

    if ("scrollTop" in eventOrScroll && maybePrevScroll) {
      currentScrollTop = eventOrScroll.scrollTop;
    } else if ("currentTarget" in eventOrScroll) {
      currentScrollTop = eventOrScroll.currentTarget.scrollTop;
    }

    setScrollTop(currentScrollTop);
  };

  return {
    scrollRef,
    onClickUp,
    onClickDown,
    onHandleScroll,
    setScrollTop,
    scrollTop,
  };
};
