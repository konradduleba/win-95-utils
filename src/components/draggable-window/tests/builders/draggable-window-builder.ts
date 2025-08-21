import { expect } from "vitest";
import { screen, within } from "@testing-library/dom";

import { HEADER_TEST_ID } from "@components/draggable-window/constants";
import { Position } from "@components/draggable-window/types";

import {
  DraggableWindowBuilderProps,
  DraggableWindowDimensions,
} from "../types";

export class DraggableWindowBuilder {
  mainWindow: HTMLDivElement;
  header: HTMLDivElement;
  position: Position;
  dimensions: DraggableWindowDimensions;

  constructor({ id }: DraggableWindowBuilderProps) {
    this.mainWindow = screen.getByTestId(id);
    this.header = within(this.mainWindow).getByTestId(HEADER_TEST_ID);
    this.position = this.getWindowPosition();
    this.dimensions = this.getWindowDimensions();
  }

  getWindowPosition(): Position {
    const containerStyles = window.getComputedStyle(this.mainWindow);

    return {
      x: parseInt(containerStyles.left, 10),
      y: parseInt(containerStyles.top, 10),
    };
  }

  expectWindowAtPosition({ x, y }: Position) {
    const position = this.getWindowPosition();

    expect(position.x).toBe(x);
    expect(position.y).toBe(y);
  }

  getWindowDimensions(): DraggableWindowDimensions {
    const containerStyles = window.getComputedStyle(this.mainWindow);

    return {
      height: 100,
      width: parseInt(containerStyles.width, 10),
    };
  }

  expectWindowDimensions({ height, width }: DraggableWindowDimensions) {
    expect(this.dimensions.width).toBe(width);
    expect(this.dimensions.height).toBe(height);
  }

  expectWindowToBeVisible() {
    expect(this.mainWindow).toBeVisible();
  }

  isWindowActive(): boolean {
    return this.header.getAttribute("aria-selected") === "true";
  }
}
