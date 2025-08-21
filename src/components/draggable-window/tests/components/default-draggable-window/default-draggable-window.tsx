import { FC, useState } from "react";

import { ScreenPropertiesProvider } from "@providers/screen-properties-provider/screen-properties.provider";
import { Content } from "@providers/main-app-providers/components";

import { DraggableWindow } from "@components/draggable-window/draggable-window";

import {
  TEST_TITLE,
  TEST_ACTIONS,
  TEST_INITIAL_POSITION,
  TEST_WINDOW_WIDTH,
  TEST_WINDOW_ID,
  TEST_WINDOW_CONTENT_ID,
} from "../../mocks";

import styles from "./default-draggable-window.module.scss";

export const DefaultDraggableWindow: FC = () => {
  const [isActiveTask, setIsActiveTask] = useState(true);

  const onMarkAsActiveTask = () => {
    setIsActiveTask(true);
  };

  const onMarkAsInactiveTask = () => {
    setIsActiveTask(false);
  };

  return (
    <ScreenPropertiesProvider>
      <Content>
        <DraggableWindow
          id={TEST_WINDOW_ID}
          onMarkAsActiveTask={onMarkAsActiveTask}
          onMarkAsInactiveTask={onMarkAsInactiveTask}
          position={TEST_INITIAL_POSITION}
          windowWidth={TEST_WINDOW_WIDTH}
          isActiveTask={isActiveTask}
          title={TEST_TITLE}
          actions={TEST_ACTIONS}
        >
          <div
            className={styles.content}
            data-testid={TEST_WINDOW_CONTENT_ID}
          />
        </DraggableWindow>
      </Content>
    </ScreenPropertiesProvider>
  );
};
