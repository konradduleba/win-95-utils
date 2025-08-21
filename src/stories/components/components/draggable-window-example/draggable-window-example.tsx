import { FC, useState } from "react";

import { DraggableWindow } from "@components/draggable-window/draggable-window";

import {
  ACTIONS,
  INITIAL_POSITION,
  WINDOW_ID,
  WINDOW_WIDTH,
} from "./constants";

import { DraggableWindowProps } from "@components/draggable-window/types";

import styles from "./draggable-window-example.module.scss";

type DraggableWindowExampleProps = Pick<DraggableWindowProps, "title">;

export const DraggableWindowExample: FC<DraggableWindowExampleProps> = ({
  title,
}) => {
  const [isActiveTask, setIsActiveTask] = useState(true);

  const onMarkAsActiveTask = () => {
    setIsActiveTask(true);
  };

  const onMarkAsInactiveTask = () => {
    setIsActiveTask(false);
  };

  return (
    <DraggableWindow
      id={WINDOW_ID}
      onMarkAsActiveTask={onMarkAsActiveTask}
      onMarkAsInactiveTask={onMarkAsInactiveTask}
      position={INITIAL_POSITION}
      windowWidth={WINDOW_WIDTH}
      isActiveTask={isActiveTask}
      title={title}
      actions={ACTIONS}
    >
      <div className={styles.content} />
    </DraggableWindow>
  );
};
