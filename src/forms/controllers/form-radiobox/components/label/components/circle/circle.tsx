import { FC } from "react";
import cn from "classnames";

import { useFormRadiobox } from "../../../../hooks/useFormRadiobox";

import styles from "./circle.module.scss";

export const Circle: FC = () => {
  const { isSelected, isInvalid, disabled } = useFormRadiobox();

  return (
    <div
      className={cn(styles.circle, {
        [styles.invalid]: isInvalid,
        [styles.disabled]: disabled,
      })}
    >
      <div
        className={cn(styles.secondCircle, {
          [styles.invalid]: isInvalid,
          [styles.disabled]: disabled,
        })}
      >
        {isSelected && <div className={styles.dot} />}
      </div>
    </div>
  );
};
