import { CSSProperties, FC } from "react";
import cn from "classnames";

import { useDraggableWindow } from "@components/draggable-window/hooks";
import { getWindowDimensions } from "@components/draggable-window/helpers";

import styles from "./preview-window.module.scss";

export const PreviewWindow: FC = () => {
  const { windowBorder, windowRef } = useDraggableWindow();
  const { height, width } = getWindowDimensions(windowRef);

  const containerStyles: CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div style={containerStyles}>
      {windowBorder.map(({ isOverlapping, x, y, isVertical }, index) => (
        <div
          key={index}
          className={cn(styles.dash, {
            [styles.verticalDash]: isVertical,
            [styles.overlapping]: isOverlapping,
          })}
          style={{
            left: x,
            top: y,
          }}
        />
      ))}
    </div>
  );
};
