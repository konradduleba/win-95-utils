import { MouseEventHandler, ReactNode, RefObject } from "react";

import { ButtonProps } from "@buttons/button/button";

export type WindowDimensions = Pick<DOMRect, "height" | "width">;

export type Dash = {
  x: number;
  y: number;
  isOverlapping: boolean;
  isVertical: boolean;
};

export type Position = {
  x: number;
  y: number;
};

export type Action = ButtonProps & {
  id: string;
  label: string;
  icon: ReactNode;
};

export type DraggableWindowProps = {
  id: string;
  title: string;
  isActiveTask: boolean;
  onMarkAsActiveTask: () => void;
  onMarkAsInactiveTask: () => void;
  windowWidth: number;
  position: Position;
  actions: Action[];
};

export type DraggableWindowContextProps = Omit<
  DraggableWindowProps,
  "onMarkAsInactiveTask"
> & {
  isWindowDragging: boolean;
  windowRef: RefObject<HTMLDivElement>;
  headerRef: RefObject<HTMLDivElement>;
  onStartDraggingWindow: MouseEventHandler<HTMLDivElement>;
  position: Position;
  oldPosition: Position;
  windowBorder: Dash[];
};
