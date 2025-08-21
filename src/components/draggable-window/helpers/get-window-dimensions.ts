import { RefObject } from "react";

import { WindowDimensions } from "../types";

import { WINDOW_INITIAL_DIMENSIONS } from "../constants";

export const getWindowDimensions = (
  windowRef: RefObject<HTMLDivElement> | null
): WindowDimensions => {
  if (!windowRef || !windowRef.current) {
    return WINDOW_INITIAL_DIMENSIONS;
  }

  const { height, width } = windowRef.current.getBoundingClientRect();

  return {
    height,
    width,
  };
};
