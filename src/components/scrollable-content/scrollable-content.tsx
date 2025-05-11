import { FC, PropsWithChildren } from "react";

import { ButtonDown, ButtonUp, Scroll, ScrollWrapper } from "./components";

import { useGetIsScrollVisible, useScrollableHandlers } from "./hooks";

import { ScrollableContentContextProps, ScrollableContentProps } from "./types";

import { ScrollableContentContext } from "./scrollable-content.context";

export const ScrollableContent: FC<
  PropsWithChildren<ScrollableContentProps>
> = ({ children, wrapperProps, wrapperRef, scrollStep, customHeight }) => {
  const { scrollRef, onClickUp, onClickDown, onHandleScroll } =
    useScrollableHandlers({ scrollStep });
  const { childrenRef, scrollHeight, isVisible } = useGetIsScrollVisible({
    customHeight,
  });

  const properties: ScrollableContentContextProps = {
    onClickDown,
    onClickUp,
    onHandleScroll,
    scrollRef,
    wrapperProps,
    wrapperRef,
    childrenRef,
    scrollHeight,
    isVisible,
  };

  return (
    <ScrollableContentContext.Provider value={properties}>
      <ScrollWrapper>
        {isVisible && <ButtonDown />}
        <Scroll>{children}</Scroll>
        {isVisible && <ButtonUp />}
      </ScrollWrapper>
    </ScrollableContentContext.Provider>
  );
};
