import { FC } from "react";
import cn from "classnames";

import SvgChevron from "@icons/chevron";

import { ActionButton } from "@buttons/action-button/action-button";

import styles from "./chevron-button.module.scss";

type ChevronButtonProps = {
  isRotated?: boolean;
  onClick: () => void;
};

export const ChevronButton: FC<ChevronButtonProps> = ({
  isRotated,
  onClick,
}) => {
  return (
    <ActionButton onClick={onClick}>
      <SvgChevron
        className={cn(styles.chevron, {
          [styles.rotated]: isRotated,
        })}
      />
    </ActionButton>
  );
};
