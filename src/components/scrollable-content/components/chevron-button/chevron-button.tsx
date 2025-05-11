import { FC } from "react";
import cn from "classnames";

import SvgChevron from "@icons/chevron";

import { ActionButton } from "@buttons/action-button/action-button";

import styles from "./chevron-button.module.scss";

type ButtonPosition = "top" | "bottom";

type ChevronButtonProps = {
  position: ButtonPosition;
  onClick: () => void;
  testId: string;
};

const BUTTON_STYLES: Record<ButtonPosition, string> = {
  top: styles.top,
  bottom: styles.bottom,
};

export const ChevronButton: FC<ChevronButtonProps> = ({
  onClick,
  position,
  testId,
}) => {
  return (
    <ActionButton
      onClick={onClick}
      className={BUTTON_STYLES[position]}
      data-testid={testId}
    >
      <SvgChevron
        className={cn(styles.chevron, { [styles.rotated]: position === "top" })}
      />
    </ActionButton>
  );
};
