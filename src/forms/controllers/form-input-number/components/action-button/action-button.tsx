import { FC } from "react";
import cn from "classnames";

import SvgChevron from "@icons/chevron";

import { Button } from "@buttons/button";

import styles from "./action-button.module.scss";

type ActionButtonProps = {
  onClick: () => void;
  isIncrement?: boolean;
  testId: string;
};

export const ActionButton: FC<ActionButtonProps> = ({
  onClick,
  isIncrement,
  testId,
}) => {
  return (
    <Button onClick={onClick} className={styles.button} testId={testId}>
      <SvgChevron
        className={cn(styles.icon, { [styles.increment]: isIncrement })}
      />
    </Button>
  );
};
