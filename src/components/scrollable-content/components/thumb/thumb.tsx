import { FC } from "react";

import { ActionButton } from "@buttons/action-button/action-button";
import { ButtonProps } from "@buttons/button/button";

import styles from "./thumb.module.scss";

type ThumbProps = Pick<ButtonProps, "buttonRef">;

export const Thumb: FC<ThumbProps> = ({ buttonRef }) => {
  return (
    <div className={styles.container}>
      <ActionButton className={styles.thumb} buttonRef={buttonRef} />
    </div>
  );
};
