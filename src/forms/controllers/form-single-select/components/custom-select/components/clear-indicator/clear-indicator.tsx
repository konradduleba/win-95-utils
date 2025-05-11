import { FC } from "react";
import { ClearIndicatorProps } from "react-select";

import { ActionButton } from "@buttons/action-button/action-button";

import SvgClose from "@icons/close";

import { SINGLE_SELECT_CLEAR_BUTTON } from "../../../../constants";

import { getButtonHandlers } from "../../helpers";

import styles from "./clear-indicator.module.scss";

export const ClearIndicator: FC<ClearIndicatorProps> = ({ innerProps }) => {
  const { ariaHidden, onHandleClick, onHandleKeyDown } = getButtonHandlers({
    innerProps,
  });

  return (
    <ActionButton
      onClick={onHandleClick}
      aria-hidden={ariaHidden}
      onKeyDown={onHandleKeyDown}
      aria-label={SINGLE_SELECT_CLEAR_BUTTON}
    >
      <SvgClose className={styles.close} />
    </ActionButton>
  );
};
