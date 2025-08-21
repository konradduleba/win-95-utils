import { ScreenProperties } from "@providers/screen-properties-provider/types";

import { WindowDimensions, Position } from "../types";

type GetNewWindowPosition = {
  headerDimensions: WindowDimensions;
  screenDimensions: Pick<ScreenProperties["properties"], "height" | "width">;
  cursorPositions: Position;
};

export const getNewWindowPosition = ({
  cursorPositions,
  headerDimensions,
  screenDimensions,
}: GetNewWindowPosition): Position => {
  const maxLeft = -headerDimensions.width * 0.8;
  const maxTop = 0;
  const maxRight = screenDimensions.width - headerDimensions.width * 0.2;
  const maxBottom = screenDimensions.height - headerDimensions.height;

  const newX = Math.max(maxLeft, Math.min(cursorPositions.x, maxRight));
  const newY = Math.max(maxTop, Math.min(cursorPositions.y, maxBottom));

  return {
    x: newX,
    y: newY,
  };
};
