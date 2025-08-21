/* eslint-disable react-hooks/exhaustive-deps */
import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { useScreenProperties } from "@providers/screen-properties-provider/hooks";

import { Dash, DraggableWindowProps, Position } from "../types";

import {
  getWindowDimensions,
  getNewWindowPosition,
  getWindowBorderElements,
} from "../helpers";

import { OFFSET_DEFAULT } from "../constants";

type UseDraggWindowProps = Pick<
  DraggableWindowProps,
  "position" | "onMarkAsActiveTask"
>;

export const useDraggWindow = ({
  position,
  onMarkAsActiveTask,
}: UseDraggWindowProps) => {
  const { properties } = useScreenProperties();

  const windowRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const [isWindowDragging, setIsWindowDragging] = useState(false);
  const [oldPosition, setOldPosition] = useState<Position>(position);
  const [newPosition, setNewPosition] = useState<Position>(position);
  const [windowBorder, setWindowBorder] = useState<Dash[]>([]);
  const [offset, setOffset] = useState<Position>(OFFSET_DEFAULT);

  const onStartDraggingWindow: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      onMarkAsActiveTask();
      setIsWindowDragging(true);
      setOffset({
        x: event.clientX - newPosition.x,
        y: event.clientY - newPosition.y,
      });
    },
    [newPosition]
  );

  const onMoveWindow = useCallback(
    (event: MouseEvent) => {
      if (isWindowDragging) {
        const headerDimensions = getWindowDimensions(headerRef);

        const cursorPositions: Position = {
          x: event.clientX - offset.x,
          y: event.clientY - offset.y,
        };

        const newWindowPosition = getNewWindowPosition({
          headerDimensions,
          cursorPositions,
          screenDimensions: properties,
        });

        const windowDimensions = getWindowDimensions(windowRef);

        const borderElements = getWindowBorderElements({
          windowDimensions,
          newWindowPosition,
          initialWindowPosition: oldPosition,
        });

        setWindowBorder(borderElements);

        setNewPosition(newWindowPosition);
      }
    },
    [isWindowDragging, offset, properties, oldPosition]
  );

  const onStopDraggingWindow = useCallback(() => {
    setIsWindowDragging(false);
    setOldPosition(newPosition);
  }, [newPosition]);

  useEffect(() => {
    if (isWindowDragging) {
      window.addEventListener("mousemove", onMoveWindow);
      window.addEventListener("mouseup", onStopDraggingWindow);
    } else {
      window.removeEventListener("mousemove", onMoveWindow);
      window.removeEventListener("mouseup", onStopDraggingWindow);
    }
    return () => {
      window.removeEventListener("mousemove", onMoveWindow);
      window.removeEventListener("mouseup", onStopDraggingWindow);
    };
  }, [isWindowDragging, onMoveWindow, onStopDraggingWindow]);

  return {
    position: newPosition,
    oldPosition,
    isWindowDragging,
    windowRef,
    headerRef,
    onStartDraggingWindow,
    windowBorder,
  };
};
