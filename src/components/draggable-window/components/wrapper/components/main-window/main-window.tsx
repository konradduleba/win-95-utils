import { CSSProperties, FC, PropsWithChildren } from "react";

import { BoxBorder } from "@components/box-border";

import { useDraggableWindow } from "../../../../hooks";

import styles from "./main-window.module.scss";

export const MainWindow: FC<PropsWithChildren> = ({ children }) => {
  const {
    id,
    isWindowDragging,
    oldPosition,
    windowWidth,
    windowRef,
    position,
    onMarkAsActiveTask,
  } = useDraggableWindow();

  const newPosition: CSSProperties = {
    top: isWindowDragging ? oldPosition.y : position.y,
    left: isWindowDragging ? oldPosition.x : position.x,
    width: `${windowWidth}px`,
  };

  return (
    <div
      data-testid={id}
      ref={windowRef}
      className={styles.mainWindow}
      style={newPosition}
      onClick={onMarkAsActiveTask}
    >
      <BoxBorder variant="02">{children}</BoxBorder>
    </div>
  );
};
