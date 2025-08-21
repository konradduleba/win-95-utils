import { FC } from "react";

import { useDraggableWindow } from "@components/draggable-window/hooks";

import { ActionButton } from "@buttons/action-button/action-button";

import styles from "./actions.module.scss";

export const Actions: FC = () => {
  const { actions } = useDraggableWindow();

  return (
    <div className={styles.actions}>
      {actions.map(({ icon, id, label, ...restButtonProps }) => (
        <ActionButton
          key={id}
          aria-label={label}
          {...restButtonProps}
          className={styles.button}
        >
          {icon}
        </ActionButton>
      ))}
    </div>
  );
};
