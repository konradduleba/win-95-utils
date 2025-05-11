import { HTMLAttributes, MutableRefObject, Ref, UIEvent } from "react";

import { ScrollState } from "react-scrollbars-custom/dist/types/types";

export type ScrollableContentProps = {
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
  wrapperRef?: Ref<HTMLDivElement>;
  scrollStep?: number;
  customHeight?: number;
};

export type HandleScrollType = (
  eventOrScroll: UIEvent<HTMLDivElement> | ScrollState,
  maybePrevScroll?: ScrollState
) => void;

export type ScrollableContentContextProps = ScrollableContentProps & {
  onClickDown: () => void;
  onClickUp: () => void;
  onHandleScroll: HandleScrollType;
  scrollRef: MutableRefObject<null>;
  childrenRef: MutableRefObject<HTMLDivElement | null>;
  scrollHeight: number;
  isVisible: boolean;
};
