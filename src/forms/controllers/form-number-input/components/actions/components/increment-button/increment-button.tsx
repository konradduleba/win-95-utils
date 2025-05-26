import { FC } from "react";

import { ActionButton } from "@buttons/action-button/action-button";

import SvgChevron from "@icons/chevron";

import { useFormNumberInput } from "../../../../hooks";
import { INCREMENT } from "../../../../constants";

import styles from "./increment-button.module.scss";

export const IncrementButton: FC = () => {
  const { onIncrementValue, disabled } = useFormNumberInput();

  return (
    <ActionButton
      onClick={onIncrementValue}
      aria-label={INCREMENT}
      disabled={disabled}
    >
      <SvgChevron className={styles.icon} />
    </ActionButton>
  );
};
