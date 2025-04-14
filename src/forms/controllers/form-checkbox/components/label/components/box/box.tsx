import { FC } from "react";
import cn from "classnames";

import SvgCheck from "@icons/check";

import { useFormCheckbox } from "../../../../hooks/useFormCheckbox";
import { BOX_TEST_ID } from "../../../../constants";

import styles from "./box.module.scss";

export const Box: FC = () => {
  const { isChecked, isInvalid, disabled } = useFormCheckbox();

  return (
    <div
      className={cn(styles.box, {
        [styles.invalid]: isInvalid,
        [styles.disabled]: disabled,
      })}
      data-testid={BOX_TEST_ID}
      aria-disabled={disabled}
      aria-invalid={isInvalid}
    >
      {isChecked && <SvgCheck className={styles.icon} />}
    </div>
  );
};
