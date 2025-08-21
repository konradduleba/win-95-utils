import { FC } from "react";
import cn from "classnames";

import { Typography } from "@typography/typography";

import { useDraggableWindow } from "@components/draggable-window/hooks";

import styles from "./title.module.scss";

export const Title: FC = () => {
  const { isActiveTask, title } = useDraggableWindow();

  return (
    <Typography
      variant="h3"
      className={cn(styles.title, {
        [styles.inactiveTitle]: !isActiveTask,
      })}
    >
      {title}
    </Typography>
  );
};
