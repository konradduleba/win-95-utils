import { FC, MouseEventHandler, PropsWithChildren } from "react";
import cn from "classnames";

import { useDraggableWindow } from "@components/draggable-window/hooks";
import { HEADER_TEST_ID } from "@components/draggable-window/constants";

import { BLACKLIST_SELECTORS } from "./constants";

import styles from "./wrapper.module.scss";

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  const { onStartDraggingWindow, isActiveTask, headerRef } =
    useDraggableWindow();

  const onDragStartIfNotInteractive: MouseEventHandler<HTMLDivElement> = (
    event
  ) => {
    if ((event.target as HTMLElement).closest(BLACKLIST_SELECTORS.join(","))) {
      return;
    }

    onStartDraggingWindow(event);
  };

  return (
    <div
      ref={headerRef}
      className={cn(styles.header, {
        [styles.inactive]: !isActiveTask,
      })}
      onMouseDown={onDragStartIfNotInteractive}
      data-testid={HEADER_TEST_ID}
      aria-selected={isActiveTask}
    >
      {children}
    </div>
  );
};
