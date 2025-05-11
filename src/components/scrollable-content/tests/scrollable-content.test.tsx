import { describe, test, expect } from "vitest";
import { act, render } from "@testing-library/react";
import { ScrollState } from "react-scrollbars-custom/dist/types/types";

import { ScrollableContentBuilder } from "./builders";

import {
  TEST_INITIAL_POSITION,
  TEST_SCROLL_FINAL_POSITION,
  TEST_SCROLL_STEP,
  mockClientHeight,
  mockScrollHeight,
} from "./mocks";

import { WithLongHeight } from "./components";

mockClientHeight();
mockScrollHeight();

const renderScrollableContent = async () => {
  const { container } = render(<WithLongHeight />);

  const scroll = new ScrollableContentBuilder({
    container,
    scrollStep: TEST_SCROLL_STEP,
  });

  return {
    scroll,
  };
};

describe("Test coverage for Scrollable Content", () => {
  test(`Should scroll down by one step`, async () => {
    const { scroll } = await renderScrollableContent();

    const { result, scrollToMock } = scroll.getScrollHandlers({
      initialScrollTop: TEST_INITIAL_POSITION,
    });

    const { onClickDown, setScrollTop } = result.current;

    act(() => {
      onClickDown();
      setScrollTop(-TEST_SCROLL_STEP);
    });

    expect(scrollToMock).toHaveBeenCalledWith(
      TEST_INITIAL_POSITION,
      -TEST_SCROLL_STEP
    );

    const { scrollTop } = result.current;

    expect(scrollTop).toBe(-TEST_SCROLL_STEP);
  });

  test(`Should scroll down by two steps`, async () => {
    const { scroll } = await renderScrollableContent();

    const { result } = scroll.getScrollHandlers({
      initialScrollTop: TEST_INITIAL_POSITION,
    });

    const { onClickDown, setScrollTop } = result.current;

    const EXPECTED_POSITION = -2 * TEST_SCROLL_STEP;

    act(() => {
      onClickDown();
      setScrollTop(-TEST_SCROLL_STEP);
      onClickDown();
      setScrollTop(EXPECTED_POSITION);
    });

    const { scrollTop } = result.current;

    expect(scrollTop).toBe(EXPECTED_POSITION);
  });

  test(`Should scroll down by two steps and scroll up by one step`, async () => {
    const { scroll } = await renderScrollableContent();

    const { result } = scroll.getScrollHandlers({
      initialScrollTop: TEST_INITIAL_POSITION,
    });

    const { onClickDown, setScrollTop, onClickUp } = result.current;

    act(() => {
      onClickDown();
      setScrollTop(-TEST_SCROLL_STEP);
      onClickDown();
      setScrollTop(-2 * TEST_SCROLL_STEP);
      onClickUp();
      setScrollTop(-TEST_SCROLL_STEP);
    });

    const { scrollTop } = result.current;

    expect(scrollTop).toBe(-TEST_SCROLL_STEP);
  });

  test("Should update scrollTop correctly when scrolling", async () => {
    const { scroll } = await renderScrollableContent();

    const { result } = scroll.getScrollHandlers({
      initialScrollTop: TEST_INITIAL_POSITION,
    });

    const { onHandleScroll } = result.current;

    act(() => {
      onHandleScroll(
        { scrollTop: TEST_SCROLL_FINAL_POSITION } as ScrollState,
        {
          scrollTop: TEST_SCROLL_FINAL_POSITION - TEST_SCROLL_STEP,
        } as ScrollState
      );
    });

    const { scrollTop } = result.current;

    expect(scrollTop).toBe(TEST_SCROLL_FINAL_POSITION);
  });
});
