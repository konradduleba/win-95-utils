import { vi } from "vitest";

import { within } from "@testing-library/dom";
import { act, renderHook } from "@testing-library/react";

import Scrollbar from "react-scrollbars-custom";

import { TEST_BUTTON_DOWN, TEST_BUTTON_UP, TEST_THUMB } from "../../constants";

import { useScrollableHandlers } from "../../hooks";

import {
  GetScrollHandlersProps,
  ScrollableContentBuilderProps,
} from "../types";

export class ScrollableContentBuilder {
  container: HTMLElement;
  scrollStep: number;
  buttonUp: HTMLButtonElement;
  buttonDown: HTMLButtonElement;
  thumb: HTMLDivElement;

  constructor({ container, scrollStep }: ScrollableContentBuilderProps) {
    this.container = container;
    this.scrollStep = scrollStep;
    this.buttonUp = within(this.container).getByTestId(TEST_BUTTON_UP);
    this.buttonDown = within(this.container).getByTestId(TEST_BUTTON_DOWN);
    this.thumb = within(this.container).getByTestId(TEST_THUMB);
  }

  getScrollHandlers({ initialScrollTop }: GetScrollHandlersProps) {
    const scrollToMock = vi.fn();
    const scrollInstance = { scrollTo: scrollToMock } as unknown as Scrollbar;

    const { result } = renderHook(() =>
      useScrollableHandlers({ scrollStep: this.scrollStep })
    );

    act(() => {
      result.current.setScrollTop(initialScrollTop);
      (result.current.scrollRef.current as unknown) = scrollInstance;
    });

    return {
      result,
      scrollToMock,
    };
  }
}
