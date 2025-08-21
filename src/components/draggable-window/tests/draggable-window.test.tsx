import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { DraggableWindowBuilder } from "./builders";

import { TEST_WINDOW_ID } from "./mocks";

import { DefaultDraggableWindow } from "./components";

const renderDraggableWindow = async () => {
  render(<DefaultDraggableWindow />);

  const draggableWindow = new DraggableWindowBuilder({
    id: TEST_WINDOW_ID,
  });

  return {
    draggableWindow,
  };
};

describe("Test coverage for Draggable Window", () => {
  test("Should toggle window active state when clicking outside", async () => {
    const { draggableWindow } = await renderDraggableWindow();

    expect(draggableWindow.isWindowActive()).toBe(true);

    await userEvent.click(document.body);
    expect(draggableWindow.isWindowActive()).toBe(false);
  });
});
